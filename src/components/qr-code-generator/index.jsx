import QRCode from "react-qr-code";
import "./styles.css";
import { useState } from "react";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQRCode() {
    setQrCode(input);
    setInput('');
  }

  return (
    <div>
      <h1>QR Code generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          placeholder="Enter your value
            here"
          value={input}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={() => handleGenerateQRCode()}
        >
          Generate
        </button>
      </div>

      <div>
        <QRCode id="qr-code-value" value={qrCode}
        size={400} bgColor="white"
        ></QRCode>
      </div>
    </div>
  );
}
