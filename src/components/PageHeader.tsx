import React, { ReactNode } from "react";

export default function PageHeader({ children }: { children: ReactNode }) {
  return (
    <div className="text-4xl font-bold text-purple-700">
      {children}
      <div className="border-2 w-[50%] border-blue-700/60 rounded-md mt-1"></div>
    </div>
  );
}
