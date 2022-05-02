import { lazy } from "react";

const Home = lazy(() => import("../page/Home.tsx"));
const User = lazy(() => import("../page/User.tsx"));
const Perfil = lazy(() => import("../page/Perfil.tsx"));

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/usuario",
    component: User
  },
  {
    path: "/perfil",
    component: Perfil
  }
]

export default routes;