import Posts from "../components/Posts/Posts";

const auth = [
  {
    path: "/posts",
    component: Posts,
    protectedRoute: false,
  },
];

export default auth;
