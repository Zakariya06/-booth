import Exhibition from "@/components/Exhibition/Exhibition";
import Logdata from "@/components/Logdata/Logdata";
import NewArrivals from "@/components/NewArrivals/NewArrivals";
import UploadImage from "@/components/UploadImage/UploadImage";
import StoreProvider from "./StoreProvider";

export default function Home() {
  return (

      <div className="page">
        <Exhibition />
        <UploadImage />
        <NewArrivals />
        <Logdata />
      </div> 
  );
}

export const dynamic = "force-dynamic";
