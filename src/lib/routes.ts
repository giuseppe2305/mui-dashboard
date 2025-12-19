import { Home, Person, Settings, ShowChart } from "@mui/icons-material";

export const routes = [
  {
    path: "/",
    label: "Home",
    icon: Home,
  },
  {
    path: "/charts",
    label: "Charts",
    icon: ShowChart,
  },
  {
    path: "/settings",
    label: "Settings",
    icon: Settings,
  },
  {
    path: "/account",
    label: "Account",
    icon: Person,
  },
];
