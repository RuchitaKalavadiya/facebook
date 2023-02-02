import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import ButtonComponent from "./common/Button";
import ConfirmationDialog from "./ConfirmationDialog";
import "./style.css";
import HideStoryDialog from "./HideStoryDialog";

const StyledLabel = styled(
  FormControlLabel,
  {}
)(() => ({
  margin: 0,
  paddingLeft: "12px",
  paddingRight: "12px",
  justifyContent: "space-between",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#f3f3f3",
    borderRadius: "8px",
  },
}));

const SettingDialog = ({ open, onDialogValueChange }) => {
  const [confirmationDialog, setConfirmationDialog] = useState(false);
  const [hideStoryDialog, setHideStoryDialog] = useState(false);

  const handleClose = () => {
    console.log("close");
    onDialogValueChange(false);
  };
  const onSettingChange = (newValue) => {
    console.log(newValue);
    setConfirmationDialog(true);
  };
  const onConfirmationDialogChange = (newValue) => {
    setConfirmationDialog(newValue);
  };
  const onHideStoryFromClick = () => {
    setHideStoryDialog(true);
  };
  const onHideStoryDialogChange = (newValue) => {
    setHideStoryDialog(newValue);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle justifyContent={"center"} display="flex">
          {"Story privacy"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <Typography variant="subtitle1" fontWeight="bold" color="#000">
              Who can see your story?
            </Typography>
            <Typography variant="subtitle2">
              Your story will be visible for 24 hours on Facebook and Messenger.
            </Typography>
            <FormControl fullWidth>
              <RadioGroup
                defaultValue="friend"
                onChange={(event) => {
                  onSettingChange(event.target.value);
                }}
              >
                <StyledLabel
                  value="public"
                  control={<Radio />}
                  label="Public"
                  labelPlacement="start"
                />
                <StyledLabel
                  value="friend"
                  control={<Radio />}
                  label="Friends"
                  labelPlacement="start"
                />
                <StyledLabel
                  value="custom"
                  control={<Radio />}
                  label="Custom"
                  labelPlacement="start"
                />
              </RadioGroup>
            </FormControl>
            <Divider sx={{ margin: "10px 0" }} />
            <Grid
              display="flex"
              justifyContent="space-between"
              className="hide-story-from"
              sx={{
                padding: "0 12px",
                cursor: "pointer",
              }}
            >
              <Typography>Hide story from</Typography>
              <Button variant="text" onClick={onHideStoryFromClick}>
                Next
              </Button>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={handleClose}>Cancel</ButtonComponent>
          <ButtonComponent
            onClick={handleClose}
            variant="contained"
            disableElevation
          >
            Save
          </ButtonComponent>
        </DialogActions>
      </Dialog>
      <ConfirmationDialog
        dialog={confirmationDialog}
        onDialogValueChange={onConfirmationDialogChange}
      />
      <HideStoryDialog
        dialog={hideStoryDialog}
        onDialogValueChange={onHideStoryDialogChange}
      />
    </>
  );
};

export default SettingDialog;
