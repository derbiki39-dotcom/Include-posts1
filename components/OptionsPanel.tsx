
import React from 'react';

interface OptionsPanelProps {
  embedType: 'responsive' | 'fixed';
  setEmbedType: (type: 'responsive' | 'fixed') => void;
  width: string;
  setWidth: (width: string) => void;
  height: string;
  setHeight: (height: string) => void;
}

export const OptionsPanel: React.FC<OptionsPanelProps> = ({
  embedType,
  setEmbedType,
  width,
  setWidth,
  height,
  setHeight
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold text-slate-200 mb-3">Embed Type</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setEmbedType('responsive')}
            className={`flex-1 text-center px-4 py-2 rounded-lg transition-colors duration-200 ${
              embedType === 'responsive'
                ? 'bg-cyan-500 text-white font-bold'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Responsive
          </button>
          <button
            onClick={() => setEmbedType('fixed')}
            className={`flex-1 text-center px-4 py-2 rounded-lg transition-colors duration-200 ${
              embedType === 'fixed'
                ? 'bg-cyan-500 text-white font-bold'
                : 'bg-slate-700 hover:bg-slate-600'
            }`}
          >
            Fixed Size
          </button>
        </div>
      </div>
      
      {embedType === 'fixed' && (
        <div className="flex items-end gap-4">
          <div className="flex-1">
            <label htmlFor="width-input" className="block text-sm font-medium text-slate-300 mb-1">Width (px)</label>
            <input
              id="width-input"
              type="number"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="e.g., 800"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="height-input" className="block text-sm font-medium text-slate-300 mb-1">Height (px)</label>
            <input
              id="height-input"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-slate-100 focus:outline-none focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500"
              placeholder="e.g., 600"
            />
          </div>
        </div>
      )}
    </div>
  );
};
