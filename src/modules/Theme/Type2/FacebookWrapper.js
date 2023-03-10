import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "../Type2/AppBarComponent";
import DrawerComponent from "../Type2/DrawerComponent";
import { DrawerHeader } from "../../Views/appBar/DrawerHeaderComponent";

const Layout2 = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBarComponent />
      <DrawerComponent />
      <Box component="main" sx={{ width: "100%" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default Layout2;
