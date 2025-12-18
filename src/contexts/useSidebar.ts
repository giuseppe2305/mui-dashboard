import { use } from "react";
import { SidebarContext } from "./SidebarContext";

export function useSidebar() {
  const context = use(SidebarContext);

  if (!context) throw new Error("Sidebar Context used outside his proider.");
  return context;
}
