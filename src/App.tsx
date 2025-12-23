import { RouterProvider } from "react-router-dom";
import { router } from "./routing";
import { NavModalProvider } from "./context/NavModalContext";

export default function App() {
  return (
    <NavModalProvider>
      <RouterProvider router={router} />
    </NavModalProvider>
  );
}
