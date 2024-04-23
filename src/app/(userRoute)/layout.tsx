import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="w-screen">
        <Navbar />
        {/* <Nav /> */}
        <div className="px-10">

        {children}
        </div>
      </div>
    </>
  );
}
