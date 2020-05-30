import Login from "../containers/Login/Login";
import Classroom from "../containers/Classroom/Classroom";

const appRoutes = [
  { path: "/login", component: Login },
  {
    path: "/classroom",
    private: true,
    component: Classroom,
  },
  { redirect: true, path: "/", to: "/login" },
];

export default appRoutes;
