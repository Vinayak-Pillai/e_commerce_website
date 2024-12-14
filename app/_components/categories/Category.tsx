import { ICategory } from "@/lib/types";
import Image from "next/image";

export default function Category({
  categoryData,
}: {
  categoryData: ICategory;
}) {
  return (
    <div className="text-sm">
      <div className="rounded-full bg-gray-100 w-[100px] h-[100px] p-5 mx-auto shadow-lg flex align-items-center">
        <Image
          src={categoryData.categoryImage}
          alt={categoryData.categoryName}
          height={70}
          width={70}
          className="hover:cursor-pointer"
        />
      </div>
      <p className="text-center mx-auto my-2 w-1/2 md:w-full hover:cursor-pointer">
        {categoryData.categoryName}
      </p>
    </div>
  );
}
