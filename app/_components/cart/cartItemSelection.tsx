"use client";
import clsx from "clsx";
import AddToCart from "../svgs/AddToCart";
import { useAppSelector } from "@/lib/hooks/storeHooks";

export default function CartItemSelection() {
  const { cartItems } = useAppSelector((state) => state.products);
  return (
    <>
      <div
        className={clsx(
          !cartItems.length && "hidden",
          "fixed w-[120px] h-[50px] py-1 bg-slate-700 bottom-5  left-1/2 transform -translate-x-1/2 rounded-full z-50 hover:cursor-pointer hover:scale-110 transition-transform duration-700"
        )}
      >
        <div className="flex items-center justify-evenly mt-1">
          <div className="w-8 h-full">
            <AddToCart size={8} color="#fff" />
          </div>
          <p className="text-center font-bold text-white">
            {cartItems.reduce((acc, { cartQty }) => {
              return acc + cartQty;
            }, 0)}{" "}
            Items
          </p>
        </div>
      </div>
    </>
  );
}
