import { useLocation } from "react-router-dom";

import SearchPost from "../features/home/SearchPost";
import NavigationMenu from "./NavigationMenu";

function Header({ onChange }) {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="sticky top-0 mb-16 flex h-16 items-center justify-between bg-yellow-400 px-1.5 pb-2 pt-2 shadow sm:mb-20 sm:px-4 md:mb-32">
      <div>
        <span className="text-xs font-semibold tracking-wider sm:text-sm">
          connecty
        </span>
      </div>

      {currentPath === "/home" && <SearchPost onChange={onChange} />}

      <NavigationMenu />
    </header>
  );
}

export default Header;
