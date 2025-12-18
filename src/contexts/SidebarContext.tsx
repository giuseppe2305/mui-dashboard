import { createContext, useState } from "react";
import type { ChildrenNode } from "../types/ChildrenNode";

interface ContextValue {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const SidebarContext = createContext<undefined | ContextValue>(undefined);

function SidebarProvider({ children }: ChildrenNode) {
  const [isOpen, setIsOpen] = useState(true);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  return <SidebarContext.Provider value={{ isOpen, openSidebar, closeSidebar }}>{children}</SidebarContext.Provider>;
}

export { SidebarContext, SidebarProvider };
