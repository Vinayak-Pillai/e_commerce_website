"use client";
export default function CartItemsQuantity({
  qty = 0,
  productId,
  handleQuantityClick,
}: {
  qty: number;
  productId: number;
  handleQuantityClick: (obj: {
    type: "plus" | "minus";
    productId: number;
  }) => void;
}) {
  const handleClick = (obj: { type: "plus" | "minus"; productId: number }) => {
    handleQuantityClick(obj);
  };
  return (
    <div className="flex border rounded-sm mx-2  border-primaryColor">
      <div className="border-r border-r-primaryColor w-4 hover:cursor-pointer">
        <p
          className="text-primaryColor text-center"
          onClick={() => handleClick({ type: "minus", productId })}
        >
          -
        </p>
      </div>
      <div className="border-r border-r-primaryColor w-4">
        <p className="text-white bg-primaryColor text-center">{qty}</p>
      </div>
      <div className="w-4 hover:cursor-pointer">
        <p
          className="text-primaryColor text-center"
          onClick={() => handleClick({ type: "plus", productId })}
        >
          +
        </p>
      </div>
    </div>
  );
}
