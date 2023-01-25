import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "./appBar";
import DrawerComponent from "../Views/appBar/DrawerComponent";
import { DrawerHeader } from "./appBar/DrawerHeaderComponent";
import SidebarList from "./appBar/SideBarList";

const Layout2 = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarComponent
        handleDrawer={handleDrawer}
        open={open}
        hideExtras={true}
      />
      <DrawerComponent open={open}></DrawerComponent>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout2;
