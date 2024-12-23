"use client";

import React, { useRef } from "react";
import { AppStore, makeStore } from "@/lib/store";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(null);

  console.log(storeRef.current, "stroeRef");
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
