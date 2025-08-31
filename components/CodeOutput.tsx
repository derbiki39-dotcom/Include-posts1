
import React, { useState } from 'react';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { CheckIcon } from './icons/CheckIcon';

interface CodeOutputProps {
  code: string;
}

export const CodeOutput: React.FC<CodeOutputProps> = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  if (!code) {
    return null;
  }

  return (
    <div className="relative bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-700 h-full">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-2 rounded-md bg-slate-700 hover:bg-slate-600 transition-colors text-slate-300 hover:text-white"
        aria-label="Copy code"
      >
        {isCopied ? <CheckIcon /> : <ClipboardIcon />}
      </button>
      <pre className="text-sm overflow-x-auto h-full text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};
