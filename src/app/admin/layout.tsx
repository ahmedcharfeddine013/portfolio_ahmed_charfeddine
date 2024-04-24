export const dynamic = "force-dynamic";

export const metadata = {
  icons: {
    icon: "/Logo.png", // /public path
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="container my-6">{children}</div>
    </>
  );
}
