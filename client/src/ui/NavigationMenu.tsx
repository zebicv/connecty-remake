import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiOutlineHome />,
    cName: "flex justify-start items-center py-2 px-4 list-none h-[60px]",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <AiIcons.AiOutlineUser />,
    cName: "flex justify-start items-center py-2 px-4 list-none h-[60px]",
  },
  {
    title: "Logout",
    path: "/",
    icon: <IoIosLogOut />,
    cName: "flex justify-start items-center py-2 px-4 list-none h-[60px]",
  },
];

const NavigationMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout = async (item) => {
    const isLogout = item.title === "Logout" ? true : false;

    if (!isLogout) return;

    if (isLogout) {
      const response = await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      localStorage.removeItem("currentUser");

      console.log(response);
    } else {
      return;
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#F9FAFB" }}>
        <div className="flex items-center justify-start">
          <Link to="#" className="ml-8 bg-none text-xl" onClick={showSidebar}>
            <FaIcons.FaBars />
          </Link>
        </div>
      </IconContext.Provider>

      <IconContext.Provider value={{ color: "#334185" }}>
        <nav
          className={
            sidebar
              ? "fixed right-0 top-0 flex h-screen justify-center bg-yellow-100 transition-all duration-[350ms] sm:w-44 md:w-52 lg:w-60 "
              : "fixed right-[-100%] top-0 flex h-screen w-[250px] justify-center bg-yellow-100 transition-all duration-[850ms]"
          }
        >
          <ul className="w-full" onClick={showSidebar}>
            <li className="flex h-20 w-full items-center justify-start bg-yellow-100">
              <Link to="#" className="ml-4 bg-none text-xl">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={item.cName}
                  onClick={() => handleLogout(item)}
                >
                  <Link
                    to={item.path}
                    className="flex h-full w-[95%] items-center rounded-md px-2 text-sm font-semibold uppercase text-slate-700 no-underline hover:bg-yellow-400 sm:text-base md:text-lg"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default NavigationMenu;


