export default function ProductSkeletonLoader() {
  return (
    <>
      <div className="animate-pulse w-[150px] h-[200px]">
        <div className="border border-gray-300 p-2 rounded-lg w-[100%] h-[100%]">
          <div className="w-[100%] h-[80%] bg-gray-300 rounded-md"></div>
          <p className="bg-gray-300 w-[100px] h-2 rounded-lg mt-3"></p>
          <div className="flex justify-between items-center mt-3">
            <p className="bg-gray-300 w-[100px] h-2 rounded-lg"></p>
            <p className="bg-gray-300 w-[20px] h-2 rounded-lg"></p>
          </div>
        </div>
      </div>
    </>
  );
}
