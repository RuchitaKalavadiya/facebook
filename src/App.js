import { Box } from "@mui/system";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./modules/Views/login";
import User from "./modules/Views/User";
import Home from "./modules/Views/home";
import CreateStory from "./modules/Views/home/CreateStory";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "Peter Johns | Facebook";
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#F0F2F5",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/stories">
          <Route path="/create" element={<CreateStory />}></Route>
        </Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
