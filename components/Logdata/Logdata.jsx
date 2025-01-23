import React from "react";
import Input from "../Input";
import Button from "../Button";

function Logdata() {
  return (
    <div className="Logdata">
      <div className="row">
        <div className="col-lg-4">
          <Input
            label="Email*"
            placeholder="Enter  your email (e.g., contact@example.com)"
            type="email"
          />
          <p className="smtext mb-2">Required field.</p>
        </div>
        <div className="col-lg-4">
          <Input
            label="WhatsApp*"
            placeholder="Enter  your WhatsApp number"
            type="number"
          />
          <p className="smtext">Include country code (e.g., +1).</p>
          <p className="smtext mb-2">Please enter a valid WhatsApp number.</p>
        </div>
        <div className="col-lg-4">
          <Input
            label="Telegram*"
            placeholder="Enter  your Telegram username"
          />
          <p className="smtext">Please enter a valid Telegram username.</p>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="buttonContainer">
          <Button value="Preview Booth Page" />
          <Button value="Generate QR Code" className="fillBtn" />
        </div>
      </div>
    </div>
  );
}

export default Logdata;
