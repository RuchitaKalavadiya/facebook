import SidebarList from "../appBar/SideBarList";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { DrawerHeader } from "./DrawerHeaderComponent";

const drawerWidth = 240;

const drawerCommonStyle = {
  overflowX: "hidden",
  backgroundColor: "transparent",
  borderRight: "none",
  paddingLeft: '18px',
  paddingRight: '10px',
};

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...drawerCommonStyle,
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  ...drawerCommonStyle,
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function DrawerComponent({ open }) {
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <SidebarList />
      </Drawer>
    </>
  );
}
