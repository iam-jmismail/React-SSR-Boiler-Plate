// Routes Files
import auth from "./auth";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
    protectedRoute: false,
  },
  ...auth,
  {
    component: NotFound,
    protectedRoute: false,
  },
];

export default routes;
