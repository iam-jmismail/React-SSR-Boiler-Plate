import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const auth = [
  {
    path: "/login",
    component: Login,
    protectedRoute: false,
  },
  {
    path: "/register",
    component: Register,
    protectedRoute: false,
  },
];

export default auth;
