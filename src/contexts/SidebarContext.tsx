import { createContext, useState } from "react";
import type { ChildrenNode } from "../types/ChildrenNode";

interface ContextValue {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<undefined | ContextValue>(undefined);

function SidebarProvider({ children }: ChildrenNode) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => setIsOpen((isOpen) => !isOpen);

  return <SidebarContext.Provider value={{ isOpen, toggleSidebar }}>{children}</SidebarContext.Provider>;
}

export { SidebarContext, SidebarProvider };
