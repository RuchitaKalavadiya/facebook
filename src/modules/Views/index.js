import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AppBarComponent from './appBar';
import DrawerComponent from '../Views/appBar/DrawerComponent'
import { DrawerHeader } from './appBar/DrawerHeaderComponent';


export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBarComponent handleDrawer={handleDrawer} open={open} />
      <DrawerComponent open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    </Box>
  );
}


// import * as React from "react";
// import Header from "./header";
// import { Box } from "@mui/system";
// import DrawerComponent from "./appBar/DrawerComponent";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Home from "./home";
// import User from "./User";
// import Friends from "./friends";
// import SeeAll from "./seeAll";
// import SeeGroup from "./seeGroup";
// import Shortcuts from "./shortcuts";

// export default function Facebook() {
//   function onMenuChange(item) {
//     console.log("i am menu", item);
//   }
//   return (
//     <>
//       <Box sx={{ position: "absolute", top: "0px", left: "0px", right: "0px" }}>
//         <AppBar position="static" color="transparent" elevation={0}>
//           <Toolbar dense>
//             <Header />
//           </Toolbar>
//         </AppBar>
//       </Box>
//       <Box>
//         <DrawerComponent onMenuChange={onMenuChange} />
//       </Box>
//       <Box sx={{ paddingTop: "70px", paddingLeft: "300px" }}>
//         <Router>
//           <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
//             <Route path="/profile">
//               <User />
//             </Route>
//             <Route path="/friends">
//               <Friends />
//             </Route>
//             <Route path="">
//               <SeeAll />
//             </Route>
//             <Route path="">
//               <SeeGroup />
//             </Route>
//             <Route path="">
//               <Shortcuts />
//             </Route>
//           </Switch>
//         </Router>
//       </Box>
//     </>
//   );
// }
