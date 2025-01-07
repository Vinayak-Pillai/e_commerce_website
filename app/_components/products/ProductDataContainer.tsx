import { Star } from "lucide-react";
import PillsContainer from "@/_components/products/PillsContainer";
import ProductVariants from "@/_components/products/ProductVariants";
import { IProducts } from "@/lib/types";

export default function ProductDataContainer({
  productData,
}: {
  productData: IProducts | undefined;
}) {
  const productTags = ["# Fresh Fruits", "# Imported"];
  const variantsData = ["1Kg", "2Kg"];

  return (
    <div className="border rounded-sm p-5 h-full w-full">
      {productData && (
        <>
          <div className="product-name my-3">
            <p className="text-3xl font-bold text-secondaryColor">
              {productData.productName}
            </p>
          </div>
          <div className="ratings-container flex items-center justify-star t h-4 my-2">
            {[1, 2, 3, 4, 5].map((ratingsObj, ratingsIndex) => {
              return (
                <Star
                  key={ratingsIndex}
                  fill="#fde047"
                  stroke="#fde047"
                  className="h-full w-5"
                />
              );
            })}
          </div>
          <div className="product-features my-3">
            <PillsContainer pillsData={productTags} />
          </div>
          <div className="product-variants flex items-center my-3">
            <ProductVariants variantsData={variantsData} />
          </div>
          <div className="product-description text-xs my-3 h-16 w-[100%] overflow-scroll hide-scrollbar">
            <p className="text-secondaryFontColor">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quae
              reprehenderit repellendus, dicta, eligendi quidem natus ipsum
              repudiandae vel ducimus soluta. Excepturi dolorum quos error illum
              harum. Soluta, reprehenderit eveniet. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nesciunt, dolorem officiis
              accusantium non inventore porro possimus eos temporibus
              repudiandae dignissimos delectus error saepe a corrupti quis rem
              fuga? Corporis, aliquid? Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Adipisci quidem repudiandae tenetur amet
              veritatis molestiae totam quae error, facere animi architecto
              voluptas numquam. Earum quod corporis natus iure, itaque quasi?
            </p>
          </div>
          <div className="product-qty w-24 mt-4">
            <div className="flex">
              <div className="border border-primaryColor rounded-full w-8 hover:cursor-pointer hover:bg-primaryColor hover:text-white transition-colors duration-200">
                <p
                  className="text-primaryColor hover:text-white text-center"
                  //   onClick={() => handleClick({ type: "minus", productId })}
                >
                  -
                </p>
              </div>
              <div className="w-8">
                <p className="text-primaryColor font-bold  text-center">{2}</p>
              </div>
              <div className="border border-primaryColor rounded-full w-8 hover:cursor-pointer hover:bg-primaryColor hover:text-white transition-colors duration-200">
                <p
                  className="text-primaryColor hover:text-white text-center"
                  //   onClick={() => handleClick({ type: "minus", productId })}
                >
                  +
                </p>
              </div>
            </div>

            {/* <CartItemsQuantity
              qty={productData.cartQty}
              productId={productData.productId}
              handleQuantityClick={() => {}}
            /> */}
          </div>
        </>
      )}
    </div>
  );
}
