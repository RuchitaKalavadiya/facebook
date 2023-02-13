import Layout from "../../Views/FacebookWrapper";
import { LargeComponents } from "../../components/common/LargeComponents";
import "./styles.css";
import { Box, Tab, Tabs, Typography, styled, CssBaseline } from "@mui/material";
import user from "../../../assets/user.jpg";
import { useState } from "react";

function User() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: "bold",
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );
  return (
    <>
      <Layout
        hideSponsered={true}
        showSmallSearch={true}
      >
        <LargeComponents className="facebook-cover-photo" elevation={0}>
          <Box className="cover-photo-edit-btn"> Add cover photo </Box>
          <Box className="cover-profile-photo-wrapper">
            <img src={user} className="cover-profile-photo" alt="user" />
          </Box>
          <Box
            sx={{ borderTop: 1, borderColor: "divider" }}
            className="profile-tabs"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <StyledTab label="Posts" />
              <StyledTab label="About" />
              <StyledTab label="Friends" />
              <StyledTab label="Photos" />
              <StyledTab label="Videos" />
              <StyledTab label="Check-ins" />
              <StyledTab label="More" />
            </Tabs>
            <TabPanel value={value} index={0}>
              Posts
            </TabPanel>
            <TabPanel value={value} index={1}>
              About
            </TabPanel>
            <TabPanel value={value} index={2}>
              Friends
            </TabPanel>
            <TabPanel value={value} index={3}>
              Photos
            </TabPanel>
            <TabPanel value={value} index={4}>
              Videos
            </TabPanel>
            <TabPanel value={value} index={5}>
              Check-ins
            </TabPanel>
          </Box>
        </LargeComponents>
      </Layout>
    </>
  );
}

export default User;
