"use client";

import { Toaster } from "react-hot-toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#11384e",
            color: "#f4fbff",
            border: "1px solid #3f7e9f",
          },
        }}
      />
    </>
  );
}
