"use client"
import React, { useRef } from "react";
import Input from "../Input";
import BoothDetails from "../BoothDetails";
import { useDispatch } from "react-redux";
import { addImage } from "@/lib/feature/ImageSlice";

function Exhibition() {
  const dispatch = useDispatch(); 
 
  const handleFileOpen = ( ) => { 
    const input = document.createElement("input");
    input.type = "file";
    input.click();
    input.onchange = (e) => {
        const file = e.target.files[0]  
        let url = URL.createObjectURL(file);
        if(url){
          dispatch(addImage(url));  
        }
    };
  }


  return (
    <div className="row">
      <div className="col-lg-6">
        <Input
          label={"Exhibition Name*"}
          placeholder={"Start  typing to select or add a new exhibition."}
        />
      </div>
      <div className="col-lg-6">
        <Input
          label={"Booth Name*"}
          placeholder={"Enter booth name (e.g., InnovationsHub)"}
        />
      </div>
      <div className="col-lg-12">
        <Input label={"Booth Description"} input={false} />
      </div>

      <div className="col-lg-6">
        <BoothDetails />
      </div>
      <div className="col-lg-6">
      <Input
          label={"Logo/Banner Upload"}
          placeholder={"Drag  and drop an image or upload"} 
          onClick={handleFileOpen} 
        />
      </div>
    </div>
  );
}

export default Exhibition;
