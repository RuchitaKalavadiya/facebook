import { Button, Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Component } from "react";

class CreateStoryTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Box display='flex'>
        <Grid width="15%">
          <Card sx={{ width: "100%", height: "150px", borderRadius: "12px" }}>
            <Typography variant="subtitle2" textAlign={"center"}>
              Create Story
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "50%",
                  width: 25,
                  height: 25,
                  minWidth: 20,
                }}
                onClick={this.props.onClick}
              >
                +
              </Button>
            </Typography>
          </Card>
        </Grid>
        <Grid width="85%">
          <Typography variant="caption">
            Share everyday moments with friends and family.
          </Typography>
          <Typography variant="caption">
            Stories disappear after 24 hours.
          </Typography>
          <Typography variant="caption">
            Replies and reactions are private.
          </Typography>
        </Grid>
        </Box>
      </>
    );
  }
}
export default CreateStoryTab;
