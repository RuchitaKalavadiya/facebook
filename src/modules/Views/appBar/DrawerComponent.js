import { useState } from "react";
import "./style.css";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import SidebarList from "./SideBarList";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  position: "absolute",
  color: "transparent",
  top: "70px",
}));

export default function DrawerComponent({ onMenuChange }) {
  const [open, setOpen] = useState(false);
  const [menuItem, setMenuItem] = useState("");

  const onMenuItemClick = (menuItem) => {
    console.log("menuItem", menuItem);
    setMenuItem(menuItem);
  };
  onMenuChange(menuItem);
  return (
    <>
      <Drawer variant="permanent" open={true} className="facebook-drawer">
        <Divider />
        <SidebarList open={open} onMenuItemClick={onMenuItemClick} />
      </Drawer>
    </>
  );
}
