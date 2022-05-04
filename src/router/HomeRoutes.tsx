import { Home } from "../components/pages/Home";
import { UserManagement } from "../components/pages/UserManagemant";
import { Setting } from "../components/pages/Setting";

export const homeRutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/user_management",
    exact: false,
    children: <UserManagement />
  },
  {
    path: "/setting",
    exact: false,
    children: <Setting />
  }
];
