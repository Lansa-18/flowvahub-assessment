import { useNavModalContext } from "@/context/NavModalContext";
import CloseIcon from "./icons/CloseIcon";
import Sidebar from "./ui/Sidebar";

export default function NavModal() {
  const { setIsOpen } = useNavModalContext();

  return (
    <article className="fixed inset-0 z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50"></div>

      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-10 h-full">
        <Sidebar />

        <div
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 cursor-pointer"
        >
          <CloseIcon />
        </div>
      </div>
    </article>
  );
}
