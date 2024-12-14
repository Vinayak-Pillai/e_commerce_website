import { IProducts } from "@/lib/types";
import Image from "next/image";
import AddToCart from "_components/svgs/AddToCart";
import Star from "_components/svgs/Star";
import clsx from "clsx";

export default function QuickBuyItem({
  product,
  increaseCartQty,
}: {
  product: IProducts;
  increaseCartQty: (count: number) => void;
}) {
  return (
    <>
      <div className="border rounded-lg h-[170px] w-100 md:w-[200px] relative">
        {product.isSale && (
          <div className="absolute top-[-8px] left-0">
            <button className="bg-pink-700 text-white px-2 font-bold z-50 rounded-lg text-[10px]">
              Sale
            </button>
          </div>
        )}
        <div className="product-image-container h-[120px] flex items-center w-100 justify-center relative">
          <Image
            src={product.productImage}
            alt={product.productName}
            height={120}
            width={120}
            className="hover:scale-125 transition-transform duration-500 hover:cursor-pointer"
          />
          <div className="absolute bottom-0 right-1">
            <div
              className={
                "relative w-6 h-6 md:w-7 md:h-7 p-1 hover:cursor-pointer bg-primaryColor rounded-sm hover:animate-jiggle"
              }
              onClick={() => {
                increaseCartQty(product.productId);
              }}
            >
              {/* <p className="absolute text-sm text-[11px] w-1 h-4  bg-slate-700 rounded-full p-1"> */}
              {product.cartQty > 0 && (
                <p
                  className={clsx(
                    "absolute bg-yellow-400 -top-1 -right-1 p-2 text-xs font-bold rounded-full text-slate-700 w-3 h-3 flex items-center justify-center",
                    product.cartQty >= 10 && "-top-2 -right-2 p-2"
                  )}
                >
                  {product.cartQty}
                </p>
              )}
              <AddToCart size={4} color="white" />
            </div>
          </div>
        </div>
        <div className="mx-2">
          {/* <button className="rounded-lg text-xs font-bold text-white bg-slate-700 py-1 px-2">
            Tags
          </button> */}
        </div>

        <div className="actions-container flex items-center justify-between px-2">
          <div className="font-bold text-sm text-slate-700">
            {product.productName}
          </div>
          <div className="font-bold text-sm text-slate-700">
            ₹. {product.price}
          </div>
        </div>

        <div className="text-center ml-3 w-8 h-4 flex items-center justify-center">
          <Star color="#fde68a" size={8} />
          <Star color="#fde68a" size={8} />
          <Star color="#fde68a" size={8} />
          <Star color="#fde68a" size={8} />
        </div>
      </div>
    </>
  );
}
