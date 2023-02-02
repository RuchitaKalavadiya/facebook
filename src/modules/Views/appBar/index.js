import { Toolbar, IconButton, Typography, styled, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import Facebook from "../../../assets/facebook.png";
import { Message, Notification } from "../../../assets/headerLogo.jsx";
import user from "../../../assets/user.jpg";
import Search from "../header/search";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: "#FFF",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  color: "darkslategray",
  ...(open && {
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function AppBarComponent({ handleDrawer, open }) {
  return (
    <>
      <AppBar position="fixed" open={open} elevation={1}>
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              marginRight: 5,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid item lg={3} alignItems={"center"} display={"flex"}>
              <img src={Facebook} className="facebook-logo" />
            </Grid>
            <Grid item lg justifyContent={"right"} display={"flex"}>
              <Search />
            </Grid>
            <Grid item lg={3} justifyContent={"right"} display={"flex"}>
              <div className="facebook-header-icons">
                <div className="facebook-header-icon-wrapper">
                  <div className="facebook-header-icon">
                    <Message />
                  </div>
                </div>
                <div className="facebook-header-icon-wrapper">
                  <div className="facebook-header-icon">
                    <Notification />
                  </div>
                </div>
                <div className="facebook-header-icon-wrapper">
                  <img src={user} className="facebook-header-user" />
                </div>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
