import React from 'react';

export default function App() { 
    const showFile = (e) => {
      e.preventDefault();
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target.result;
        document.write(text);
    };
    reader.readAsText(e.target.files[0]);
  };

  return <div>
    arquivo .txt: <input name="file" type="file" onChange={showFile}/>
  </div> 
}