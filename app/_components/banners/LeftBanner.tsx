"use client";
import { IBanner } from "@/lib/types";
import Image from "next/image";
import { useState } from "react";

export default function LeftBanner({ bannerData }: { bannerData: IBanner[] }) {
  const [currentBanner, setCurrentBanner] = useState(0);

  setInterval(() => {
    setCurrentBanner(Math.floor(Math.random() * (bannerData.length - 1)) + 1);
  }, 3000);
  //   useEffect(() => {
  //   }, [bannerData.length]);
  return (
    <>
      <div
        className="rounded-sm drop-shadow-sm h-[300px] w-[100%]"
        // style={{
        //   backgroundImage: `url(${bannerData[currentBanner].bannerPath})`,
        // }}
      >
        <Image
          src={bannerData[currentBanner].bannerPath}
          alt={"Random Image"}
          width={100}
          height={100}
          objectFit="cover"
        />
      </div>
    </>
  );
}
