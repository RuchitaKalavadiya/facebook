import Layout from "../FacebookWrapper";
import {
  Card,
  Tab,
  Box,
  Tabs,
  Typography,
  styled,
  Button,
  Divider,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  let history = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const fetchPosts = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/photos?_page=0&_limit=10"
    ).then((response) => response.json());

    setPosts(response);
    setLoading(false);
  };

  useEffect(() => {
    setValue(0);
    fetchPosts();
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

  const StyledCard = styled(
    Card,
    {}
  )(() => ({
    width: "670px",
    display: "flex",
    margin: "0 auto",
    padding: "15px 20px",
  }));

  const onCreateStory = () => {
    history("/stories/create");
  };

  return (
    <>
      <Layout>
        <StyledCard>
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
        </StyledCard>
        {loading && (
          <StyledCard sx={{ marginTop: "15px" }}>
            <p> Loading... </p>
          </StyledCard>
        )}
        {!loading &&
          posts.map((post) => {
            return (
              <StyledCard key={post.id} sx={{ marginTop: "15px" }}>
                <CardContent sx={{ padding: 0, width: "100%" }}>
                  <Typography variant="subtitle2" component="div">
                    Recommended post
                  </Typography>
                  <Divider sx={{ width: "100%", margin: "8px 0" }} />
                  <img
                    src={post.url}
                    alt={post.title}
                    width="100%"
                    height={"250px"}
                    className="facebook-post-img"
                    style={{ objectFit: "cover" }}
                  />
                  <Box>like comment share</Box>
                </CardContent>
              </StyledCard>
            );
          })}
      </Layout>
    </>
  );
}
