import { Box } from "@mui/system";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Facebook from "./modules/Views";
import Login from "./modules/Views/login";
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
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Facebook />} />
      </Routes>
    </Box>
  );
}

export default App;
