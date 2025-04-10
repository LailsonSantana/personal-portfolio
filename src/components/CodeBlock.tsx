import { useState, useEffect } from 'react';
import ContainerCode from './containers/ContainerCode';
import CloseIcon from '@mui/icons-material/Close';

interface CodeProps {
  fullCode: string;
}

const CodePresentation: React.FC<CodeProps> = ({ fullCode }) => {
  const [displayedCode, setDisplayedCode] = useState('');

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
  }, [fullCode]);

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
    <ContainerCode>
      {/* Barra de menu do IDE */}
      <div className="bg-[#010421] flex px-4 py-2 border-b border-[#333]">
        <div className='w-1/2 flex items-center'>
          <div className="flex space-x-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
          </div>
          <div className="text-sm text-gray-400">profile.js</div>
        </div>
        <span className='flex justify-end w-1/2'>
          <CloseIcon fontSize="small" />
        </span>
      </div>

      {/* Área do código com números de linha */}
      <div className="flex">
        {/* Números das linhas */}
        <div className="bg-[#010F22] text-gray-500 text-right pr-3 py-2 select-none ml-4">
          {Array.from({ length: Math.max(displayedLines.length, totalLines) }).map((_, i) => (
            <div key={i} className="h-6 leading-6">
              {i + 1}
            </div>
          ))}
        </div>

        {/* Código animado */}
        <pre className="flex-1 overflow-x-auto py-2 pl-2 text-[#d4d4d4]">
          {displayedLines.map((line, i) => {
            const match = line.match(/^(\s*)(.*)$/);
            const leadingSpaces = match?.[1] ?? '';
            const codeContent = match?.[2] ?? '';
            const tabSize = 2;
            const tabCount = Math.floor(leadingSpaces.length / tabSize);

            return (
              <div key={i} className="h-6 leading-6 flex">
                {Array.from({ length: tabCount }).map((_, index) => (
                  <span
                    key={index}
                    className="inline-block w-4 animate-pulse opacity-70"
                  />
                ))}
                {i === displayedLines.length - 1 ? (
                  <>
                    {formatCode(codeContent)}
                    <span className="animate-pulse">|</span>
                  </>
                ) : (
                  formatCode(codeContent)
                )}
              </div>
            );
          })}
        </pre>
      </div>

      {/* Barra de status */}
      <div className="bg-[#007acc] text-white text-xs px-4 py-1 flex justify-between">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>
          Ln {displayedLines.length}, Col{' '}
          {displayedLines[displayedLines.length - 1]?.length || 0}
        </span>
      </div>
    </ContainerCode>
  );
};

export default CodePresentation;