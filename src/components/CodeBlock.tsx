import { useState, useEffect } from 'react';

interface CodeProps{
    fullCode: string
}

const CodePresentation: React.FC<CodeProps> = ({fullCode} : CodeProps) => {
  const [displayedCode, setDisplayedCode] = useState('');
  //const fullCode = 
  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < fullCode.length) {
        setDisplayedCode(fullCode.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 60);

    return () => clearInterval(typingEffect);
  }, []);

  const displayedLines = displayedCode.split('\n');
  const totalLines = fullCode.split('\n').length;

  const formatCode = (code: string) => {
    let result = [];
    let inString = false;
    let currentString = '';
    let normalText = '';
    
    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      
      if (char === '"' || char === "'") {
        if (inString) {
          // Fecha a string
          result.push(normalText);
          result.push(
            <span key={`string-${i}`} className="text-[#E7DE6B]">
              {currentString + char}
            </span>
          );
          normalText = '';
          currentString = '';
          inString = false;
        } else {
          // Abre nova string
          inString = true;
          normalText += char;
        }
      } else {
        if (inString) {
          currentString += char;
        } else {
          normalText += char;
        }
      }
    }
    
    // Adiciona qualquer texto restante
    if (normalText) {
      result.push(normalText);
    }
    if (currentString) {
      result.push(
        <span key="last-string" className="text-[#E7DE6B]">
          {currentString}
        </span>
      );
    }
    
    return result;
  };

  return (
    
        <div className="bg-[#1e1e1e] rounded-lg overflow-hidden shadow-xl w-full max-w-2xl m-16 font-arial">
          {/* Barra de menu do IDE */}
          <div className="bg-[#252526] flex items-center px-4 py-2 border-b border-[#333]">
            <div className="flex space-x-2 mr-4">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
            </div>
            <div className="text-sm text-gray-400">profile.js</div>
          </div>
    
          {/* Área do código com números de linha */}
          <div className="flex">
            {/* Números das linhas */}
            <div className="bg-[#1e1e1e] text-gray-500 text-right pr-3 py-2 select-none ml-4">
              {Array.from({ length: Math.max(displayedLines.length, totalLines) }).map((_, i) => (
                <div key={i} className="h-6 leading-6">
                  {i + 1}
                </div>
              ))}
            </div>
    
            {/* Código animado */}
            <pre className="flex-1 overflow-x-auto py-2 pl-2 text-[#d4d4d4] font-mono text-sm">
              {displayedLines.map((line, i) => (
                <div key={i} className="h-6 leading-6">
                  {i === displayedLines.length - 1 ? (
                    <>
                      {formatCode(line)}
                      <span className="animate-pulse">|</span>
                    </>
                  ) : (
                    formatCode(line)
                  )}
                </div>
              ))}
            </pre>
          </div>
    
          {/* Barra de status */}
          <div className="bg-[#007acc] text-white text-xs px-4 py-1 flex justify-between">
            <span>UTF-8</span>
            <span>JavaScript</span>
            <span>Ln {displayedLines.length}, Col {displayedLines[displayedLines.length - 1]?.length || 0}</span>
          </div>
        </div>
      );
    
};

export default CodePresentation