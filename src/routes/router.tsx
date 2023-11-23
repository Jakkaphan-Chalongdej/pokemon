import NotFoundPage from "@/views/404.tsx";
import Detail from "@/views/Detail";
import Home from "@/views/Home";
import { RouteObject } from "react-router-dom";

export interface IRouter {
  path: string;
  name: string;
  authentMenuName: string;
  exact: boolean;
  component: React.FC;
}

export const routers: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
];
