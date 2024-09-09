import React, { useEffect } from "react";
import "./../Pages/User/Theaters/Theaters.scss";

export const SingleHexToImage = ({ hexValue, name }) => {
  const convert = () => {
    let cleanedHex = hexValue.replace(/[^A-Fa-f0-9]/g, "");

    if (cleanedHex.length % 2) {
      console.log("Cleaned hex string length is odd.");
      return;
    }

    let binary = new Array();

    for (let i = 0; i < cleanedHex.length / 2; i++) {
      let h = cleanedHex.substr(i * 2, 2);
      binary[i] = parseInt(h, 16);
    }

    let byteArray = new Uint8Array(binary);

    let img = document.querySelector("." + name);

    img.src = window.URL.createObjectURL(
      new Blob([byteArray], { type: "application/octet-stream" })
    );
  };
  useEffect(() => {
    convert();
  }, [hexValue]);

  return <img className={name} style={{width:"100%", height:"250px", borderRadius:"0 50px"}} alt="Converted Image" />;
};

export const separateHex = (hex) => {
  const res = hex.split(":");
  return res[0];
};
