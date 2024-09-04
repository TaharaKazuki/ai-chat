export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>Sidebar</div>
      <main>{children}</main>
    </div>
  );
}
