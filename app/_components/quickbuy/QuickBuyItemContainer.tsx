"use client";
import { produtsData } from "@/lib/data";
import { updateCartItem } from "@/lib/features/products/productSlice";
import { useAppDispatch } from "@/lib/hooks/storeHooks";
import ProductCard from "_components/globals/ProductCard";
import ProductSkeletonLoader from "_components/globals/ProductSkeletonLoader";
import { useEffect, useState } from "react";

export default function QuickBuyItemContainer({
  categoryId,
}: {
  categoryId: number;
}) {
  const [productsData, setProductsData] = useState(produtsData);

  useEffect(() => {
    const filteredProductsData = produtsData.filter((productsObj) => {
      return productsObj.categoryId == categoryId;
    });

    setProductsData(filteredProductsData);
  }, [categoryId]);

  const dispatch = useAppDispatch();

  const handleCountUpdate = (index: number) => {
    const updatedProductsData = productsData.map((productUpdateObj) => {
      if (productUpdateObj.productId == index) {
        dispatch(
          updateCartItem({
            type: "single",
            productId: productUpdateObj.productId,
            cartItem: productUpdateObj,
          })
        );

        return { ...productUpdateObj, cartQty: productUpdateObj.cartQty + 1 };
      }

      return { ...productUpdateObj };
    });
    setProductsData(updatedProductsData);
  };
  return (
    <div className="overflow-x-auto hide-scrollbar">
      <div className="grid grid-cols-2 md:grid-flow-col my-3 mx-2 md:mt-3 gap-2 md:gap-4 min-w-max">
        {/* <div className="flex my-3 mx-2 md:mt-3 overflow-auto"> */}
        {productsData.length > 0 ? (
          [...productsData, ...productsData, ...productsData].map(
            (productsObj, productIndex) => {
              if (productsObj.categoryId == categoryId) {
                return (
                  <ProductCard
                    product={productsObj}
                    key={productIndex}
                    increaseCartQty={handleCountUpdate}
                  />
                );
              }
            }
          )
        ) : (
          <div className="grid grid-flow-col gap-2 md:gap-0">
            <ProductSkeletonLoader />
            <ProductSkeletonLoader />
            <ProductSkeletonLoader />
            <ProductSkeletonLoader />
          </div>
        )}
      </div>
    </div>
  );
}
