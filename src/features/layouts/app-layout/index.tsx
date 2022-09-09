import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/header/Header";
import SideNavigationr from "./components/side-navigation";

const AppLayout = () => {
  const [activeMenu, setActiveMenu] = useState<boolean>(true);
  return (
    <div className="flex min-h-screen flex-col">
      {activeMenu ? (
        <div className="sidebar dark:bg-secondary-dark-bg fixed w-72 bg-white opacity-100">
          <SideNavigationr setActiveMenu={setActiveMenu} />
        </div>
      ) : (
        <div className="dark:bg-secondary-dark-bg hidden w-0 opacity-0">
          <SideNavigationr setActiveMenu={setActiveMenu} />
        </div>
      )}
      <div
        className={`dark:bg-main-bg bg-main-bg min-h-screen ${activeMenu ? "md:ml-72" : "flex-2"}`}
      >
        <Header IsActiveMennu={activeMenu} />
        <div className="flex max-h-[calc(100vh_-_64px)] flex-1 flex-col overflow-auto">
          <React.Suspense fallback={null}>
            <Outlet />
          </React.Suspense>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
