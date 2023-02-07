import Layout from "../../Views/FacebookWrapper";
import { LargeComponents } from "../../components/common/LargeComponents";
import "./styles.css";
import { Box } from "@mui/material";
import user from "../../../assets/user.jpg";

function User() {
  return (
    <>
      <Layout hideSponsered={true} showSmallSearch={true}>
        <LargeComponents className="facebook-cover-photo" elevation={0}>
          <Box className="cover-photo-edit-btn"> Add cover photo </Box>
          <Box className="cover-profile-photo-wrapper">
            <img src={user} className="cover-profile-photo" alt="user" />
          </Box>
        </LargeComponents>
      </Layout>
    </>
  );
}

export default User;
