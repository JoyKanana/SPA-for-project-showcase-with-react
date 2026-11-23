import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen bg-[#F5F1F6]">
      <Sidebar />

      {/* Everything except the sidebar goes in here */}
      <div className="sm:ml-64">
        <header className="px-4 py-3">
          <Navbar />
        </header>

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;