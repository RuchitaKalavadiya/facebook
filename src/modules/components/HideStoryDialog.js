import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { useEffect } from "react";
import ButtonComponent from "./common/Button";

const HideStoryDialog = ({ dialog, onDialogValueChange }) => {
//   useEffect(() => {
//     console.log("mounted");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   }, []);

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
          {"Select people"}
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>search click</DialogContentText>
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

export default HideStoryDialog;
