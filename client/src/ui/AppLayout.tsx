import { Outlet } from "react-router-dom";

import Header from "./Header";

function AppLayout() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}

export default AppLayout;
