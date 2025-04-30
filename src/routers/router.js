import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Main from "../pages/main/Main";
import MyPage from "../pages/my/MyPage";
import SignIn from "../pages/signIn/SignIn";
import SignSuccess from "../pages/signIn/SignSuccess";
import SignUp from "../pages/signUp/SignUp";
import AuthLayout from "../pages/layout/AuthLayout";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Main />
      },
      {
        path : "/member",
        element : <AuthLayout />,
        children : [
          {
            path : "my",
            element : <MyPage />
          }
        ]
      }
    ]
  },
  {
    path : "/sign-in",
    element : <SignIn />
  },
  {
    path : "/sign-in-success",
    element : <SignSuccess />
  },
  {
    path : "/sign-up",
    element : <SignUp />
  }
])

export default router