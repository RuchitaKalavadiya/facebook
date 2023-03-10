import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import fbSmall from "../../../assets/fbSmall.png";
import user from "../../../assets/user.jpg";
import { Divider, Typography } from "@mui/material";
import closeIcon from "../../../assets/closeIcon.svg";
import setting from "../../../assets/setting.svg";
import { useNavigate } from "react-router-dom";
import SettingDialog from "../../components/SettingDialog";
import { useState } from "react";

const drawerWidth = "290px";

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  width: drawerWidth,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
}));

const DrawerComponent = () => {
  let history = useNavigate();
  const [dialog, setDialog] = useState(false);

  const onCloseIconClick = () => {
    history("/");
  };

  const onSettingClick = () => {
    setDialog(true);
  };

  const onDialogValueChange = (newValue) => {
    setDialog(newValue);
  };

  return (
    <>
      <Drawer variant="permanent" elevation={1}>
        <Box padding="10px 20px" width={drawerWidth}>
          <Box display="flex" alignItems="center" elevation={1}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid",
                height: "40px",
                width: "40px",
                justifyItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
              }}
              sx={{ cursor: "pointer", background: "#e3e3e3" }}
              onClick={onCloseIconClick}
            >
              <img src={closeIcon} alt="close-icon" height="25px" />
            </Box>
            <img
              src={fbSmall}
              alt="facebook-logo"
              height={"45px"}
              width="auto"
            />
          </Box>
          <Box
            display="flex"
            padding="25px 0"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" fontWeight="bold">
              Your Story
            </Typography>
            <Box
              sx={{
                height: "30px",
                width: "30px",
                borderRadius: "50%",
                background: "#e3e3e3",
                padding: "5px",
              }}
              // onClick={onSettingClick}
            >
              <img
                src={setting}
                height="20px"
                onClick={onSettingClick}
                alt="setting"
              />
            </Box>
          </Box>
          <Box display="flex">
            <div
              style={{
                borderRadius: "50%",
                height: "60px",
                width: "60px",
                overflow: "hidden",
              }}
            >
              <img src={user} alt="user" className="" />
            </div>
            <Box
              display={"flex"}
              alignItems="center"
              fontWeight="bold"
              paddingLeft="10px"
            >
              Peter Johns
            </Box>
          </Box>
        </Box>
        <Divider sx={{ padding: "12px 0 0 0" }} />
      </Drawer>
      <SettingDialog open={dialog} onDialogValueChange={onDialogValueChange} />
    </>
  );
};

export default DrawerComponent;
