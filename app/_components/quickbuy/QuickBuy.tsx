"use client";
import { useState } from "react";
import QuickBuyHeader from "./QuickBuyHeader";
import QuickBuyItemContainer from "./QuickBuyItemContainer";

export default function QuickBuy() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const handleCategoryId = (id: number) => {
    setSelectedCategoryId(id);
  };
  return (
    <div className=" mt-7">
      <QuickBuyHeader setCategoryId={handleCategoryId} />
      <QuickBuyItemContainer categoryId={selectedCategoryId} />
    </div>
  );
}
