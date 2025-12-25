import { createContext, useContext, useState } from "react";

interface NavModalProviderProps {
  children: React.ReactNode;
}

interface NavModalContextProp {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavModalContext = createContext<NavModalContextProp | undefined>(
  undefined,
);

function NavModalProvider({ children }: NavModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavModalContext.Provider>
  );
}

function useNavModalContext() {
  const context = useContext(NavModalContext);

  if (context == undefined)
    throw new Error("Context was used outside the provider.");

  return context;
}

export { NavModalProvider, useNavModalContext};
