
import React from 'react';

interface UrlInputProps {
  url: string;
  setUrl: (url: string) => void;
  onGenerate: () => void;
}

export const UrlInput: React.FC<UrlInputProps> = ({ url, setUrl, onGenerate }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate();
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 mb-6">
      <label htmlFor="url-input" className="sr-only">Website URL</label>
      <input
        id="url-input"
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com/your-article-url"
        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition duration-200"
        required
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:shadow-cyan-500/50 transform hover:-translate-y-0.5 transition-all duration-300"
      >
        Generate
      </button>
    </form>
  );
};
