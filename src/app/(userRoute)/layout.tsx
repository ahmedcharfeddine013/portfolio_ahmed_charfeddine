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
      {/* <Head>
        <link rel="icon" href="/Logo.png" sizes="64x64" type="image/png" />
      </Head> */}
      <div className="w-screen">
        <Navbar />
        {/* <Nav /> */}
        <div className="px-10">{children}</div>
      </div>
    </>
  );
}
