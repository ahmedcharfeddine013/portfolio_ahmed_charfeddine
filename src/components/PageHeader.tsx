import React, { ReactNode } from "react";

export default function PageHeader({ children }: { children: ReactNode }) {
  return <div className="text-4xl text-purple-700">{children}</div>;
}
