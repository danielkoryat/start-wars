import Home from "./pages/Home/Home";
import Characters from "./pages/Characters/Characters";

const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/characters",
    element: Characters,
  }
];

export default routes;
