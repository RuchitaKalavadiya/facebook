import Layout from "../FacebookWrapper";
import {
  Tab,
  Box,
  Tabs,
  Typography,
  styled,
  Button,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledCard } from "../../components/common/StyledCard";
import PostCard from "../../components/common/PostCard";
import CreateStoryTab from "./CreateStoryTab";

export default function Home() {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  let history = useNavigate();
  const limit = 2;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onLoadMoreClick = () => {
    setPage(page + 1);
  };

  const fetchMorePosts = async () => {
    try {
      if (page > 0) {
        let response = await fetchPosts();
        let data = posts;
        data = [...data, ...response];
        setPosts(data);
      }
    } catch (error) {
      console.error({ error });
    }
  };

  const fetchPosts = async () => {
    try {
      return await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`
      ).then((response) => response.json());
    } catch (error) {
      setPosts([]);
      console.error("[Failed at fetchPosts]", { error });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setValue(0);
    fetchInitialData();
    return () => {
      console.log("befor unmout");
      setPage(1);
      setPosts([]);
    };
  }, []);

  useEffect(() => {
    console.log("page change here", page);
    fetchMorePosts();
  }, [page]);

  const fetchInitialData = async () => {
    let response = await fetchPosts();
    setPosts(response);
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
      <Layout open={true}>
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
              <CreateStoryTab onClick={onCreateStory} />
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
            return <PostCard key={post.id} post={post} />;
          })}
        {!loading && posts.length && (
          <Grid
            display={"flex"}
            justifyContent="center"
            padding="15px 0"
          >
            <Button
              variant="contained"
              disableElevation
              onClick={onLoadMoreClick}
            >
              Load more posts
            </Button>
          </Grid>
        )}
      </Layout>
    </>
  );
}
