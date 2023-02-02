import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from "@mui/material";
import ButtonComponent from "./common/Button";
// TODO: here add dynamic search
const SettingPeopleDialog = ({ dialog, onDialogValueChange }) => {
  const onConfirmationChangeCancel = () => {
    onDialogValueChange(false);
  };
  const onConfirmationChangeSave = () => {
    onDialogValueChange(false);
  };
  return (
    <>
      <Dialog open={dialog}>
        <DialogTitle justifyContent={"center"} display="flex">
          {"Change story privacy"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <Typography variant="subtitle2">
              Changes you make will be applied to any photos and videos
              currently in your story in addition to those you add from now on
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent onClick={onConfirmationChangeCancel}>
            Cancel
          </ButtonComponent>
          <ButtonComponent
            onClick={onConfirmationChangeSave}
            variant="contained"
            disableElevation
          >
            Save
          </ButtonComponent>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SettingPeopleDialog;
