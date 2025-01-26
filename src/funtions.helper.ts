import QRCode from "qrcode";

export const generateHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  setQrCode: React.Dispatch<React.SetStateAction<string>>,
  inputValue: string
) => {
  e.preventDefault(); 
  if (!inputValue.trim()) {
    alert("Please enter a valid URL");
    return;
  }

  try {
    
    const options = {
      width: 300, 
    };

    const qrCodeDataURL = await QRCode.toDataURL(inputValue, options);
    setQrCode(qrCodeDataURL); 
  } catch (err) {
    console.error("Error generating QR Code:", err);
  }
};

export const handleDownload = (
  qrCode: string,
  downloadLinkRef: React.RefObject<HTMLAnchorElement>
) => {
  if (!qrCode) {
    alert("No QR Code to download!");
    return;
  }

  if (downloadLinkRef.current) {
    downloadLinkRef.current.href = qrCode; 
    downloadLinkRef.current.download = "qrcode.png"; 
    downloadLinkRef.current.click(); 
  }
};
