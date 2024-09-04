export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen">
      <div className="hidden bg-red-400 lg:block lg:w-1/4">Sidebar</div>
      <main className="w-screen bg-blue-400 lg:w-3/4">{children}</main>
    </div>
  );
}
