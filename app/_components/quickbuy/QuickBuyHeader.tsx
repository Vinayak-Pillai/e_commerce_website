"use client";
import { categoriesData } from "@/lib/data";
import clsx from "clsx";
import { useState } from "react";

export default function QuickBuyHeader({
  setCategoryId,
}: {
  setCategoryId: (id: number) => void;
}) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  function handleClickCategoryClick(categoryId: number) {
    setSelectedCategoryId(categoryId);
    setCategoryId(categoryId);
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 items-center">
        <div className="text-left text-fontColor">
          <p className="ml-2 md:ml-0 my-2 font-semibold text-2xl">Quick Buy</p>
        </div>
        <div className="categories-container overflow-x-auto hide-scrollbar">
          <div className="flex items-center justify-between ml-2 md:ml-0">
            {categoriesData.map((categoriesObj) => {
              return (
                <p
                  onClick={() => {
                    handleClickCategoryClick(categoriesObj.categoryId);
                  }}
                  //   className="text-center text-slate-700 focus:visible:bg-primaryColor py-1 px-2 rounded-md"
                  className={clsx(
                    "text-center hover:cursor-pointer text-nowrap py-1 px-3 text-fontColor transition-all duration-700",
                    selectedCategoryId == categoriesObj.categoryId &&
                      "bg-primaryColor rounded-md text-white"
                  )}
                  key={categoriesObj.categoryId}
                >
                  {categoriesObj.categoryName}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
