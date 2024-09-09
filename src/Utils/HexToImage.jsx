import React, { useEffect } from "react";

export const HexToImage = ({ hexValues, name }) => {
  useEffect(() => {
    const convert = () => {
      hexValues.forEach((hexValue, index) => {
        let cleanedHex = hexValue.replace(/[^A-Fa-f0-9]/g, "");

        if (cleanedHex.length % 2) {
          console.log(`Cleaned hex string length is odd for image ${index}.`);
          return;
        }

        let binary = new Array();

        for (let i = 0; i < cleanedHex.length / 2; i++) {
          let h = cleanedHex.substr(i * 2, 2);
          binary[i] = parseInt(h, 16);
        }

        let byteArray = new Uint8Array(binary);

        let img = document.querySelector(`.${name}-${index}`);

        if (img) {
          img.src = window.URL.createObjectURL(
            new Blob([byteArray], { type: "application/octet-stream" })
          );
        }
      });
    };

    convert();
  }, [hexValues, name]);

  return (
    <div className={`image-container ${name}`}>
      {hexValues.map((_, index) => (
        <img
          key={index}
          className={`${name}-${index}`}
          alt={`Converted Image ${index}`}
          style={{ width: "90px", height: "90px", borderRadius: "50%" }}
        />
      ))}
    </div>
  );
};

export const separateHex = (hex) => {
  const res = hex.split(":");
  return res[0];
};
