import { IProducts } from "@/lib/types";
import Image from "next/image";
import Star from "@/_components/svgs/Star";
import CartItemsQuantity from "@/_components/globals/CartItemsQuantity";

export default function CartIemCard({
  products,
  handleQuantityClick,
}: {
  products: IProducts;
  handleQuantityClick: (obj: {
    type: "plus" | "minus";
    productId: number;
  }) => void;
}) {
  return (
    <>
      <div className="w-full p-2 shadow-md h-36 rounded-xl border-2 flex justify-between items-center">
        <div className="w-1/3">
          <Image
            className={"w-100 h-[90%]"}
            src={products.productImage}
            alt={products.productName}
          />
        </div>
        <div className="w-full h-full flex flex-col">
          <p className="text-right text-fontColor font-bold mt-2">
            {products.productName}
          </p>
          <p className="text-right text-xs text-secondaryFontColor mb-1">
            Secondary Text - {products.productName}
          </p>
          <div className="ratings_container h-4  w-full justify-end flex items-start">
            <div className="w-4">
              <Star color="yellow" size={6} />
            </div>
            <div className="w-4">
              <Star color="yellow" size={6} />
            </div>
            <div className="w-4">
              <Star color="yellow" size={6} />
            </div>
            <div className="w-4">
              <Star color="yellow" size={6} />
            </div>
          </div>
          <div className="mt-auto flex justify-end items-center">
            {/* <div className="flex border rounded-sm mx-2  border-primaryColor">
              <div className="border-r border-r-primaryColor w-4">
                <p className="text-primaryColor">-</p>
              </div>
              <div className="border-r border-r-primaryColor w-6">
                <p className="text-white bg-primaryColor">{products.cartQty}</p>
              </div>
              <div className="w-4">
                <p className="text-primaryColor">+</p>
              </div>
            </div> */}
            <CartItemsQuantity
              qty={products.cartQty}
              productId={products.productId}
              handleQuantityClick={handleQuantityClick}
            />
            <p className="font-bold text-right">
              <span className="text-secondaryFontColor line-through">
                ₹.{products.price}
                {"  "}
              </span>
              <span className="text-fontColor">₹.{products.price}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
