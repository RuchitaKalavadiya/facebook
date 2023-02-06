import { Box } from "@mui/system";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./modules/Views/login";
import User from "./modules/Views/Profile";
import Home from "./modules/Views/home";
import CreateStory from "./modules/Views/home/CreateStory";
import Profile from "./modules/Views/Profile/index";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    document.title = "Peter Johns | Facebook";
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: "#F0F2F5",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/stories/create" element={<CreateStory />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </Box>
  );
}

export default App;
