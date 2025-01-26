import './App.scss';
import  { useState, useRef } from 'react';
import logo from '/logoqr.png';
import { generateHandler, handleDownload } from './funtions.helper'

function App() {
  const [inputValue, setInputValue] = useState<string>(''); 
  const [qrCode, setQrCode] = useState<string>(''); 
  const downloadLinkRef = useRef<HTMLAnchorElement | null>(null); 
  return (
    <div className="app">
      <div className="app__logo">
        <img className="app__image" src={logo} alt="Logo" />
        <h1 className="app__call">Enter URL to generate QR</h1>
      </div>
      <div className="app__input-container">
        <form
          className="app__form-container"
          onSubmit={(e) => generateHandler(e, setQrCode, inputValue)}
        >
          <input
            className="app__field"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Enter URL"
          />
          <button type="submit" className="app__button">
            Generate QR
          </button>
        </form>
      </div>
      {qrCode && ( 
        <div className="app__qr-container">
          
          <img src={qrCode} alt="Generated QR Code" className="app__qr-code" />
          <button
            className="app__download"
            onClick={() => handleDownload(qrCode, downloadLinkRef)}
          >
            Save as PNG
          </button>
          
          
          <a ref={downloadLinkRef} style={{ display: 'none' }} />
        </div>
      )}
    </div>
  );
}

export default App;
