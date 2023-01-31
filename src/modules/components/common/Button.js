import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonComponent = styled(
  Button,
  {}
)(() => ({
  disableElevation: true,
  textTransform: "none",
}));

export default ButtonComponent;
