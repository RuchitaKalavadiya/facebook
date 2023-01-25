import Layout from "../FacebookWrapper";
import {
  Card,
  Tab,
  Box,
  Tabs,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [value, setValue] = useState(0);
  let history = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(0);
  }, []);

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
      width: "33%",
      fontWeight: "bold",
      "&.Mui-focusVisible": {
        backgroundColor: "rgba(100, 95, 228, 0.32)",
      },
    })
  );

  const onCreateStory = () => {
    history("/stories/create");
  };

  return (
    <>
      <Layout>
        <Card
          sx={{
            width: "670px",
            display: "flex",
            margin: "0 auto",
            padding: "15px 20px",
          }}
        >
          <Box width={"100%"}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <StyledTab label="Stories" />
                <StyledTab label="Reels" />
                <StyledTab label="Rooms" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Card
                sx={{ width: "15%", height: "150px", borderRadius: "12px" }}
              >
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
                    onClick={onCreateStory}
                  >
                    +
                  </Button>
                </Typography>
              </Card>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Reels
            </TabPanel>
            <TabPanel value={value} index={2}>
              Rooms
            </TabPanel>
          </Box>
        </Card>
      </Layout>
    </>
  );
}
