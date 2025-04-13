import React, { useState, useRef } from 'react';

interface CodeProps {
  children: React.ReactNode;
  className?: string;
}

const Code: React.FC<CodeProps> = ({ children, className }) => {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);
  
  const copyToClipboard = () => {
    if (!preRef.current) return;
    
    // Create a range and selection
    const range = document.createRange();
    range.selectNode(preRef.current);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    
    // Execute the copy command
    try {
      document.execCommand('copy');
      window.getSelection()?.removeAllRanges();
      
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const language = className ? className.replace('language-', '') : '';

  return (
    <div className="code-block-container">
      {language && (
        <div className="code-language">
          <span>{language}</span>
        </div>
      )}
      <button 
        className="copy-button"
        onClick={copyToClipboard}
      >
        {isCopied ? '✓ Copied!' : 'Copy'}
      </button>
      <pre ref={preRef} className={className}>
        {children}
      </pre>
      <style jsx>{`
        .code-block-container {
          position: relative;
          margin: 1.5em 0;
          border-radius: 0.375rem;
          overflow: hidden;
        }
        .code-language {
          position: absolute;
          bottom: 0;
          left: 0;
          background: rgba(255, 255, 255, 0.1);
          padding: 0.25rem 0.75rem;
          font-size: 0.7rem;
          text-transform: uppercase;
          font-weight: bold;
          color: #e0e0e0;
          border-top-right-radius: 0.375rem;
          z-index: 10;
        }
        .copy-button {
          position: absolute;
          top: 0.5rem;
          right: 0.5rem;
          padding: 0.35rem 0.8rem;
          background: rgba(255, 255, 255, 0.1);
          color: #e0e0e0;
          border: none;
          border-radius: 0.25rem;
          cursor: pointer;
          font-size: 0.75rem;
          font-weight: 500;
          transition: all 0.2s ease;
          z-index: 10;
          display: flex;
          align-items: center;
        }
        .copy-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        pre {
          margin: 0 !important;
          border-radius: 0.375rem !important;
          overflow: auto;
          background-color: #1e1e1e !important;
          padding: 1rem 1.5rem !important;
          font-family: monospace;
          line-height: 1.5 !important;
        }
      `}</style>
    </div>
  );
};

export default Code; 