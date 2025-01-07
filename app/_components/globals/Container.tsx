import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full md:w-11/12 mx-auto relative top-[90px]">
        {children}
      </div>
    </>
  );
}
