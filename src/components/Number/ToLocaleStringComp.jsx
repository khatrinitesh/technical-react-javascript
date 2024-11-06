import React, { useState } from 'react';

const ToLocaleStringComp = () => {
    const [number, setNumber] = useState(1234567.89); // Initial number
  return (
    <>
        <h2>Localized Number Formatting</h2>
        <p>Original Number: {number}</p>
        
        {/* Display the number formatted according to the user's locale */}
        <p>Formatted (Default Locale): {number.toLocaleString()}</p>
    
        {/* Display the number in French (fr-FR) locale */}
        <p>Formatted (French Locale): {number.toLocaleString("fr-FR")}</p>

        {/* Display the number in Japanese (ja-JP) locale */}
        <p>Formatted (Japanese Locale): {number.toLocaleString("ja-JP")}</p>

        {/* Display the number as currency */}
        <p>Currency (USD): {number.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>

        {/* Display the number as a percentage */}
        <p>Percentage: {(0.25).toLocaleString("en-US", { style: "percent", minimumFractionDigits: 2 })}</p>
    </>
  );
}

export default ToLocaleStringComp;
