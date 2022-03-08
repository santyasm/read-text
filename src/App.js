import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    fetch('/Exp.TXT').then((r) => r.text()).then((text) => {
      document.write(text)
    });
  }, []);
  return <div className='App'></div>;
}