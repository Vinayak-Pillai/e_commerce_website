import { categoriesData } from "@/lib/data";
import Category from "./Category";

export default function ListCategories() {
  return (
    <div className=" md:pb-3">
      <div className="block w-full">
        {/* <hr className="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <span className="absolute px-3 font-bold text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
        </span> */}
        <p className="py-2 text-left font-semibold text-2xl ml-2 md:ml-0">
          Categories
        </p>
      </div>
      <div className="overflow-x-auto hide-scrollbar ml-2 md:ml-0">
        <div className="grid grid-flow-col grid-rows-2 gap-2 min-w-max">
          {categoriesData.length > 0 &&
            [
              ...categoriesData,
              ...categoriesData,
              ...categoriesData,
              ...categoriesData,
            ].map((categoryObj, categoryIndex) => {
              return (
                <Category categoryData={categoryObj} key={categoryIndex} />
              );
            })}
        </div>
      </div>
    </div>
  );
}
