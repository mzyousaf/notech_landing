import AssistrioChat from "@/components/AssistrioChat";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <AssistrioChat />
    </>
  );
}
