"use client";

import { Input } from "@/components/ui/input";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from "_components/header/styles/headers.module.css";

export default function HeaderSearch() {
  return (
    <>
      <div className="w-full h-[35px]">
        {/* <TextInput
          className="w-11/12 mx-auto header-search-input border-2 outline-none border-primary rounded-sm"
          id="header-search"
          type="text"
          placeholder="Search...."
        /> */}
        <Input
          type="text"
          name="header-search"
          placeholder="Search...."
          className="border rounded-lg border-gray-400 h-full focus-visible:ring-primaryColor"
        />
      </div>
    </>
  );
}
