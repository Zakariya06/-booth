"use client";
import Button from "@/components/Button";
import Exhibition from "@/components/Exhibition/Exhibition";
import Logdata from "@/components/Logdata/Logdata";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import UploadImage from "@/components/UploadImage/UploadImage";
import { createBooth } from "./api/api";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const [routeId, setRouteId] = useState(1);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      booth_name,
      booth_description,
      logo_url,
      email,
      whatsapp,
      telegram,
    } = data;
    const newBoothData = {
      exhibition_id: 1, // Get dynamically from form data
      booth_name,
      booth_description,
      logo_url,
      email,
      whatsapp: whatsapp,
      telegram,
    };

    try {
      const createdBooth = await createBooth(newBoothData); // Pass data to API
      console.log("Booth created successfully:", createdBooth);
      setRouteId(createdBooth.data.id);
      reset();
    } catch (error) {
      console.error("Failed to create booth:", error);
    }
  };

  return (
    <div className="page">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Exhibition register={register} setValue={setValue} />
        <UploadImage />
        <NewArrivals />
        <Logdata
          id={routeId}
          register={register}
          setValue={setValue}
          errors={errors}
        />
      </form>
    </div>
  );
}
