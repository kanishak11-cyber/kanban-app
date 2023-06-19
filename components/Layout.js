import React from "react";
import TopBar from "./TopBar";
import SideBar from "./SideBar";
function Layout({ children }) {
  return (
    <div>
      <TopBar />
      <SideBar />
      <main className="min-w-screen max-h-screen overflow-hidden pt-20 pl-40">{children}</main>
    </div>
  );
}

export default Layout;
