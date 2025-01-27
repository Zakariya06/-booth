import React from "react";

function FileDataLabel() {
  return (
    <div className="fileDataLabel">
      <div className="fileLeft">
        <p className="smtext">New Arrivals</p>
        <p className="smtext subHeading">File1.pdf - 2.3MB</p>
      </div>
      <div className="fileLeft fileRight">
        <p className="smtext">Catalog</p>
        <p className="smtext subHeading">Catalog2025.pdf - 5.2MB</p>
      </div>
    </div>
  );
}

export default FileDataLabel;
