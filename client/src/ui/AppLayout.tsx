import { Outlet } from "react-router-dom";
import { useState } from "react";

import Header from "./Header";

function AppLayout() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSeachQuery = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onChange={handleSeachQuery} />

      <Outlet context={[searchQuery, setSearchQuery]} />
    </div>
  );
}

export default AppLayout;
