import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className=" px-6 w-screen">
        <Navbar />
        {/* <Nav /> */}
        {children}
      </div>
    </>
  );
}
