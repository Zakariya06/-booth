"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button";
import upload_image from "@/public/upload_image.png";
import { useSelector } from "react-redux";

function UploadImage() {
  const url = useSelector((state) => state.imageReducer.url);

  console.log(url);

  return (
    <div className="UploadImageContainer">
      <Image
        src={url ? url : upload_image}
        alt="Genarated Image"
        className="uploadedImage"
        width={"100"}
        height={"100"}
      />
      <Button value="Replace/Delete" className="mt-3" />
    </div>
  );
}

export default UploadImage;
