"use client";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
  SheetDescription,
} from "@/components/ui/sheet";
import { CARTITEMS } from "@/lib/constants";
import Image from "next/image";
import CartIemCard from "../cart/CartItemCard";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/storeHooks";
import { decreaseRemoveCartItem } from "@/lib/features/products/productSlice";

export default function UserInfo() {
  const { cartItems } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleQtyClick = (toUpdateData: {
    type: "plus" | "minus" | "remove";
    productId: number;
  }) => {
    // handleQuantityClick()
    if (toUpdateData.type == "minus" || toUpdateData.type == "remove") {
      dispatch(
        decreaseRemoveCartItem({
          type: toUpdateData.type,
          productId: toUpdateData.productId,
        })
      );
    }
    console.log(toUpdateData);
  };

  return (
    <div className="flex items-center">
      <div className="favorites_svg">
        <Image
          className="dark:invert cursor-pointer"
          src="/favorites.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </div>
      <Sheet>
        <SheetTrigger>
          <div className="shopping_bag_svg">
            <Image
              className="dark:invert mx-1 cursor-pointer"
              src="/shopping_bag.svg"
              alt="logo"
              width={20}
              height={20}
              priority
            />
          </div>
        </SheetTrigger>
        <SheetContent className="w-screen md:w-full p-2 md:p-5">
          <SheetHeader>
            <SheetTitle>{CARTITEMS.CART_HEADING}</SheetTitle>

            {/* <div className="w-full drop-shadow-lg h-36 rounded-sm border-2"></div> */}
            <SheetDescription>Items</SheetDescription>
          </SheetHeader>
          {cartItems.length > 0
            ? cartItems.map((cartObj, cartIndex) => {
                return (
                  <CartIemCard
                    key={cartIndex}
                    products={cartObj}
                    handleQuantityClick={handleQtyClick}
                  />
                );
              })
            : "No items in cart"}
        </SheetContent>
      </Sheet>
      <div className="user_svg">
        <Image
          className="dark:invert mr-1 md:mr-2 cursor-pointer"
          src="/user.svg"
          alt="logo"
          width={20}
          height={20}
          priority
        />
      </div>
    </div>
  );
}
