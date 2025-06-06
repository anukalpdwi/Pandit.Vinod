import React from 'react';

interface OmSymbolProps {
  className?: string;
}

const OmSymbol: React.FC<OmSymbolProps> = ({ className }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12,2C6.477,2,2,6.477,2,12c0,5.523,4.477,10,10,10s10-4.477,10-10C22,6.477,17.523,2,12,2z M15.95,15.05
        c-0.983,0.983-2.292,1.524-3.683,1.524c-1.39,0-2.699-0.541-3.683-1.524c-0.983-0.983-1.524-2.292-1.524-3.683
        c0-1.39,0.541-2.699,1.524-3.683C9.568,6.7,10.877,6.159,12.267,6.159c1.39,0,2.699,0.541,3.683,1.524
        c0.983,0.983,1.524,2.292,1.524,3.683C17.474,12.757,16.933,14.066,15.95,15.05z M16.758,8.242
        c-1.168-1.168-2.72-1.812-4.373-1.812c-1.653,0-3.205,0.644-4.373,1.812c-1.168,1.168-1.812,2.72-1.812,4.373
        c0,1.653,0.644,3.205,1.812,4.373c1.168,1.168,2.72,1.812,4.373,1.812c1.653,0,3.205-0.644,4.373-1.812
        c1.168-1.168,1.812-2.72,1.812-4.373C18.57,10.962,17.926,9.41,16.758,8.242z"/>
      <path d="M14.5,10.5c0.552,0,1,0.448,1,1s-0.448,1-1,1h-2v1.5c0,0.828-0.672,1.5-1.5,1.5S9.5,14.828,9.5,14
        c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5c0,0.276,0.224,0.5,0.5,0.5S11.5,14.276,11.5,14v-1.5h-1c-0.552,0-1-0.448-1-1
        s0.448-1,1-1h1V9.5C11.5,9.224,11.276,9,11,9s-0.5,0.224-0.5,0.5c0,0.276-0.224,0.5-0.5,0.5S9.5,9.776,9.5,9.5
        c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V10.5H14.5z"/>
    </svg>
  );
};

export default OmSymbol;