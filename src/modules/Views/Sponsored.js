import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";
import "../styles/sponsored.css";

class Sponsored extends Component {
  render() {
    return (
      <>
        <Box
          component={"div"}
          className="sponseredWrapper"
          width={"250px"}
          paddingTop="15px"
        >
          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            paddingBottom="10px"
          >
            Sponsered
          </Typography>
          <Box>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              Group conversations
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2">Create new group</Typography>
          </Box>
        </Box>
      </>
    );
  }
}

export default Sponsored;
