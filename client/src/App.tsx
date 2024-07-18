import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginForm from "./features/login/LoginForm";
import SingupForm from "./features/login/SignupForm";
import Home from "./features/home/Home";
import AppLayout from "./ui/AppLayout";
import Profile from "./features/profile/Profile";
import ErrorPage from "./ui/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SingupForm />,
    errorElement: <ErrorPage />,
  },

  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
