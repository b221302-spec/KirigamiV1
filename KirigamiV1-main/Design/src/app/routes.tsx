import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Workshops } from "./pages/Workshops";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "workshops", Component: Workshops },
      { path: "products", Component: Products },
      { path: "services", Component: Services },
      { path: "blog", Component: Blog },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
    ],
  },
]);
