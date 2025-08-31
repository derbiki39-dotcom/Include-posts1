
import React, { useState, useCallback } from 'react';
import { UrlInput } from './components/UrlInput';
import { OptionsPanel } from './components/OptionsPanel';
import { Preview } from './components/Preview';
import { CodeOutput } from './components/CodeOutput';

export default function App() {
  const [url, setUrl] = useState<string>('');
  const [embedUrl, setEmbedUrl] = useState<string>('');
  const [embedType, setEmbedType] = useState<'responsive' | 'fixed'>('responsive');
  const [width, setWidth] = useState<string>('800');
  const [height, setHeight] = useState<string>('600');
  const [generatedCode, setGeneratedCode] = useState<string>('');
  
  const handleGenerate = useCallback(() => {
    if (!url) {
      setGeneratedCode('');
      setEmbedUrl('');
      return;
    }

    let cleanUrl = url.trim();
    if (!/^https?:\/\//i.test(cleanUrl)) {
      cleanUrl = `https://${cleanUrl}`;
    }
    setEmbedUrl(cleanUrl);

    let code = '';
    if (embedType === 'responsive') {
      code = `
<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  <iframe
    src="${cleanUrl}"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
  ></iframe>
</div>
      `.trim();
    } else {
      code = `
<iframe
  src="${cleanUrl}"
  width="${width}"
  height="${height}"
  style="border: 1px solid #334155; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
      `.trim();
    }
    setGeneratedCode(code);
  }, [url, embedType, width, height]);

  return (
    <div className="min-h-screen bg-slate-900 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            Blogger Embed Code Generator
          </h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
            Easily convert any website URL into an embeddable post for your Blogger blog.
          </p>
        </header>

        <main className="space-y-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-700">
            <UrlInput url={url} setUrl={setUrl} onGenerate={handleGenerate} />
            <OptionsPanel
              embedType={embedType}
              setEmbedType={setEmbedType}
              width={width}
              setWidth={setWidth}
              height={height}
              setHeight={setHeight}
            />
          </div>

          {(embedUrl || generatedCode) && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">Live Preview</h2>
                <Preview url={embedUrl} />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-slate-100">Embed Code</h2>
                <CodeOutput code={generatedCode} />
              </div>
            </div>
          )}
        </main>

        <footer className="text-center mt-12 text-slate-500">
          <p>&copy; {new Date().getFullYear()} - Built for creative bloggers everywhere.</p>
        </footer>
      </div>
    </div>
  );
}
