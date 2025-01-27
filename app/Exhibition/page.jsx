import Button from "@/components/Button";
import FileDataLabel from "@/components/FileDataLabel";
import exribition_image from "@/public/exribition_image.png";
import Image from "next/image";
import React from "react";

function Exhibition() {
  return (
    <div className="ExhibitionPage">
      <div className="col-lg-5 mx-auto">
        <div className="regestierForm exibitionContent">
          <div className="regesHeader">
            <h1 className="lgHeading">Exhibition Name</h1>
            <p className="smtext">Booth Description</p>

            <div className="imageCotent">
                <Image src={exribition_image} alt="Booth Example"  className="extribitionImage" />
            </div>

            <div className="filesData">
              <h2 className="mdHeading">Files</h2>
              <div className="fileDataDetail">
                <FileDataLabel />
                <FileDataLabel />
              </div>
            </div>
          </div>

          <div className="exibitionFooter">
            <div className="exibitionButtonsContainer">
              <Button value="Preview" className="fillBtn" />
              <Button value="Download" />
            </div>

            <div className="ContactButton">
              <h1 className="mdHeading">Contact</h1>
              <div className="exibitionButtonsContainer">
                <Button value="Email" className="fillBtn" /> 
                <Button value="WhatsApp" className="fillBtn" /> 
                <Button value="Telegram" className="fillBtn" />  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;
