import { Link } from "react-router-dom";

import SearchPost from "../features/home/SearchPost";
import NavigationMenu from "./NavigationMenu";

function Header() {
  return (
    <header className="sticky top-0 mb-16 flex h-16 items-center justify-between bg-yellow-400 pb-2 pl-4 pr-4 pt-2 shadow sm:mb-20 sm:pl-8 sm:pr-8 md:mb-32">
      <div>
        <span className="text-sm font-semibold tracking-wider">connecty</span>
      </div>

      <SearchPost />

      <NavigationMenu />
    </header>
  );
}

export default Header;
