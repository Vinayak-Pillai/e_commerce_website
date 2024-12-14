import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselItems } from "@/lib/data";
import Image from "next/image";
import right_banner_1 from "../../../public/banners/right_banner_1.jpg";
import right_banner_2 from "../../../public/banners/right_banner_2.jpg";

export default function Banner() {
  return (
    <div className="grid lg:grid-cols-[75%,25%] gap-2">
      <Carousel
        opts={{ loop: true }}
        loopDelayTime={5000}
        className="w-[96%] md:w-[100%] h-[200px] md:h-[500px]  rounded-lg mx-auto md:mr-auto md:ml-0"
      >
        <CarouselContent>
          {carouselItems.map((carouselObj, carouselIndex) => {
            return (
              // <div key={carouselIndex}>
              <CarouselItem key={carouselIndex}>
                <Image
                  className="w-[100%] h-[200px] md:w-[100%] md:h-[500px] rounded-lg"
                  src={carouselObj}
                  alt="temp_image"
                />
              </CarouselItem>
              // </div>
            );
          })}
        </CarouselContent>
        {/* <CarouselPrevious />
      <CarouselNext /> */}
      </Carousel>
      <div className="right-banner-container hidden lg:flex flex-col justify-between">
        <div className="top-banner h-[245px] bg-primaryColor w-100 rounded-lg">
          <Image
            className="h-[100%] w-[100%] rounded-lg"
            src={right_banner_1}
            alt="temp_image"
          />
        </div>
        <div className="top-banner h-[245px] bg-primaryColor w-100 rounded-lg">
          <Image
            className="h-[100%] w-[100%] rounded-lg"
            src={right_banner_2}
            alt="temp_image"
          />
        </div>
      </div>
    </div>
  );
}
