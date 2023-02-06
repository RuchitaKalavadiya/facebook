import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "./appBar";
import DrawerComponent from "../Views/appBar/DrawerComponent";
import { DrawerHeader } from "./appBar/DrawerHeaderComponent";
import SidebarList from "./appBar/SideBarList";
import Sponsored from "../Views/Sponsored";

const Layout = ({ open, children }) => {
  let history = useNavigate();
  function onMenuItemClick(path) {
    console.log(path);
    history(`/${path}`);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent open={open} />
      <DrawerComponent open={open}>
        <SidebarList onMenuItemClick={onMenuItemClick} />
      </DrawerComponent>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
      <Box>
        <DrawerHeader />
        <Sponsored sx={{ right: 0 }} />
      </Box>
    </Box>
  );
};

export default Layout;
