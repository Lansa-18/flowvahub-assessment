import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useNavModalContext } from "@/context/NavModalContext";
import NavModal from "../NavModal";

export default function AppLayout() {
  const { isOpen } = useNavModalContext();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="custom-1050:hidden">
        <Sidebar />
      </div>

      {isOpen && <NavModal />}
      <main className="flex-1 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
