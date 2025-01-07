import ProductCarousel from "@/_components/products/ProductCarousel";
import { produtsData } from "@/lib/data";
import fruits_veggies from "../../../public/categories/fruits_veggies.png";
import React from "react";
import ProductDataContainer from "@/_components/products/ProductDataContainer";
import ProductDetailsContainer from "@/_components/products/ProductDetailsContainer";

export default async function Page(props: {
  params: Promise<{ productId: string | number }>;
}) {
  const { productId } = await props.params;
  const productData = produtsData.find((productObj) => {
    return productObj.productId == productId;
  });
  return (
    <div className="w-[95%] md:w-[90%] lg:w-[70%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full md:max-h-[28rem] gap-2">
        <ProductCarousel
          carouselItems={[productData!.productImage!, fruits_veggies]}
        />
        <ProductDataContainer productData={productData} />
      </div>
      <div className="flex flex-col w-[90%] mx-auto">
        <p className="text-xl font-bold mt-2">Details</p>
        <ProductDetailsContainer detailsHeader="Unit" detailsText="1 Kg" />
        <ProductDetailsContainer
          detailsHeader="Nutrient Value"
          detailsText="Contains Folic acid, Vitamin C and Amino acid .Vitamin C acts as a
          powerful antioxidant and also helps formation of collagen that is
          responsible for skin and hair health."
        />
        <ProductDetailsContainer
          detailsHeader="Best before"
          detailsText="10 days"
        />
        <ProductDetailsContainer
          detailsHeader="License Number"
          detailsText="000HFJSH45105"
        />
        <ProductDetailsContainer
          detailsHeader="Return Policy"
          detailsText="Return will not be accepted if product damaged"
        />
        <ProductDetailsContainer
          detailsHeader="Disclaimer"
          detailsText="Image for representation only"
        />
      </div>
    </div>
  );
}
