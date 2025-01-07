import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
// import { carouselItems } from "@/lib/data";
import Image, { StaticImageData } from "next/image";

export default function ProductCarousel({
  carouselItems,
}: {
  carouselItems: StaticImageData[];
}) {
  return (
    <>
      <Carousel
        opts={{ loop: true }}
        loopDelayTime={8000}
        className="w-full max-w-md h-full rounded-lg mx-auto"
      >
        <CarouselContent>
          {carouselItems.map((carouselObj, carouselIndex) => {
            return (
              // <div key={carouselIndex}>
              <CarouselItem key={carouselIndex}>
                <Image
                  className="rounded-lg h-full w-full mx-auto"
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
    </>
  );
}
