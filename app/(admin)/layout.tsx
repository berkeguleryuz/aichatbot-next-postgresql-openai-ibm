import Nav from "@/components/Nav";
import Sidebar from "@/components/Sidebar";

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col flex-1">
      <Nav />
      <div className="flex flex-col lg:flex-row bg-neutral-200">
        <Sidebar />
        <div className="flex-1 flex justify-center lg:justify-start items-start max-w-5xl mx-auto w-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
