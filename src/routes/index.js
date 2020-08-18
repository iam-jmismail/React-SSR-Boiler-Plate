// Routes Files
import auth from "./auth";
import posts from "./posts";
import Home from "../components/Home/Home";
import NotFound from "../components/NotFound";

const routes = [
  {
    path: "/",
    component: Home,
    protectedRoute: false,
  },
  ...auth,
  ...posts,
  {
    component: NotFound,
    protectedRoute: false,
  },
];

export default routes;
