
import React from 'react';

interface PreviewProps {
  url: string;
}

export const Preview: React.FC<PreviewProps> = ({ url }) => {
  if (!url) {
    return null;
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-700 h-full flex flex-col">
      <div className="w-full aspect-video bg-slate-900 rounded-lg overflow-hidden">
        <iframe
          key={url} // Forces re-render on URL change
          src={url}
          title="Live Preview"
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-xs text-slate-500 mt-3 text-center">
        Note: Some websites may not allow embedding and will not appear in this preview. The generated code will still be valid.
      </p>
    </div>
  );
};
