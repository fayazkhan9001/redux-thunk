import React from "react";
import { Outlet } from "react-router-dom";
import NavbarPanel from "./NavbarPanel";

function RootLayout() {
  return (
    <div>
      <NavbarPanel />
      <Outlet />
    </div>
  );
}

export default RootLayout;
