import { Button, Card, Typography } from "@mui/material";
import { Component } from "react";

class CreateStoryTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Card sx={{ width: "15%", height: "150px", borderRadius: "12px" }}>
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
      </>
    );
  }
}
export default CreateStoryTab;
