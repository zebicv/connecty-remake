import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginForm from "./features/login/LoginForm";
import SingupForm from "./features/login/SignupForm";
import Home from "./features/home/Home";
import AppLayout from "./ui/AppLayout";
import Profile from "./features/profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/signup",
    element: <SingupForm />,
  },

  {
    element: <AppLayout />,

    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
