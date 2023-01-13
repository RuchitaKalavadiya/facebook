import * as React from "react";
import Header from "./header";
import { Box } from "@mui/system";
import DrawerComponent from "./appBar/DrawerComponent";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./home";
import User from "./User";
import Friends from "./friends";
import SeeAll from "./seeAll";
import SeeGroup from "./seeGroup";
import Shortcuts from "./shortcuts";

export default function Facebook() {
  function onMenuChange(item) {
    console.log("i am menu", item);
  }
  return (
    <>
      <Box sx={{ position: "absolute", top: "0px", left: "0px", right: "0px" }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar dense>
            <Header />
          </Toolbar>
        </AppBar>
      </Box>
      <Box>
        <DrawerComponent onMenuChange={onMenuChange} />
      </Box>
      <Box sx={{ paddingTop: "70px", paddingLeft: "300px" }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <User />
            </Route>
            <Route path="/friends">
              <Friends />
            </Route>
            <Route path="">
              <SeeAll />
            </Route>
            <Route path="">
              <SeeGroup />
            </Route>
            <Route path="">
              <Shortcuts />
            </Route>
          </Switch>
        </Router>
      </Box>
    </>
  );
}
