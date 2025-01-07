export default function ProductVariants({
  variantsData,
}: {
  variantsData: string[];
}) {
  return (
    <>
      {variantsData.length > 0 ? (
        variantsData.map((variants, variantsIndex) => {
          return (
            <div
              className="border shadow-sm rounded-lg mr-3 max-h-16 w-32 p-1 text-primaryColor hover:cursor-pointer hover:shadow-secondaryFontColor transition-shadow duration-500"
              key={variantsIndex}
            >
              <p className="font-semibold text-center text-md text-secondaryColor">
                {variants}
              </p>
              <p className="text-center">
                <span className="line-through text-secondaryFontColor">
                  ₹. 10
                </span>{" "}
                <span className="text-secondaryColor font-bold">₹. 20</span>
              </p>
            </div>
          );
        })
      ) : (
        <div className="animate-pulse border border-secondaryFontColor rounded-lg mr-3 h-16 w-16 max-h-16 p-2 bg-gray-400">
          <p className="font-semibold text-lg"> </p>
          <p>
            <span className="line-through"> </span> <span> </span>
          </p>
        </div>
      )}
    </>
  );
}
