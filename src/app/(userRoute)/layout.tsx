import Navbar from "@/components/Navbar";
import Head from "next/head";

export const dynamic = "force-dynamic";

export const metadata = {
  icons: {
    icon: "/Logo.png", // /public path
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>
        <Navbar />
        <div>{children}</div>
      </div>
    </>
  );
}
