import { useState } from "react";
import {
  Card,
  Box,
  CardContent,
  Typography,
  TextField,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Message from "./message";

export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  let history = useNavigate();
  function onCreateAccount() {
    if (userName !== "" && password !== "") {
      setErrorMsg("");
      localStorage.setItem("username", userName);
      localStorage.setItem("password", password);
    } else {
      console.log("invalid");
      setErrorMsg("Data is invalid");
    }
  }

  function onLogin() {
    console.log("on log in", userName);
    if (userName === "" || password === "") {
      setErrorMsg("Password or username can not be empty!");
    } else if (userName === "ruchita123" && password === "abc123") {
      //
      history("/home");
      console.log("correct one");
      //   redirection here
    } else {
      setErrorMsg("Password or username are not matched!");
    }
  }

  function onForgotPassword() {
    console.log("on onForgotPassword");
  }

  return (
    <>
      <Box position="absolute" top="30%" left="38%">
        <Card sx={{ minWidth: "350px" }}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }}>Login</Typography>
            <Grid marginTop="15px">
              <TextField
                placeholder="User Id/ Email"
                fullWidth
                value={userName}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Grid>
            <Grid marginTop="15px">
              <TextField
                placeholder="Password"
                fullWidth
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Grid>

            {errorMsg !== "" && <Message message={errorMsg} color={"red"} />}

            <Grid marginTop="15px">
              <Button
                variant="contained"
                fullWidth
                disableElevation
                sx={{ textTransform: "none" }}
                onClick={onLogin}
              >
                Log in
              </Button>
            </Grid>
            <Grid marginTop="15px">
              <Button
                variant="text"
                fullWidth
                sx={{ textTransform: "none" }}
                onClick={onForgotPassword}
              >
                Forgotten password?
              </Button>
            </Grid>
            <Divider />
            <Grid marginTop="25px" textAlign="center">
              <Button
                variant="contained"
                color="success"
                disableElevation
                sx={{ textTransform: "none" }}
                onClick={onCreateAccount}
              >
                Create new account
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
