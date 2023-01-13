import { Grid } from "@mui/material";
import "./style.css";
import Facebook from "../../../assets/facebook.png";
import { Message, Notification } from "../../../assets/headerLogo.jsx";
import user from "../../../assets/user.jpg";
import Search from "../header/search";

export default function Header() {
  return (
    <>
      <header className="facebook-header-wrapper">
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
      </header>
      {/* <AppBar position="fixed" open={open} sx={{ marginTop: 60 + "px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
    </>
  );
}
