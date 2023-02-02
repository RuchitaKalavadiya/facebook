import { CardContent, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StyledCard } from "./StyledCard";

export default function PostCard({ post }) {
  return (
    <>
      <StyledCard key={post.id} sx={{ marginTop: "15px" }}>
        <CardContent sx={{ padding: "0px", width: "100%" }}>
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
          <Box display="flex" justifyContent="space-between">
            <Grid>849 likes</Grid>
            <Grid>10 comments 16 shares</Grid>
          </Box>
          <Divider sx={{ width: "100%", margin: "8px 0" }} />
          <Box display="flex" justifyContent="space-between">
            <Grid>Like</Grid>
            <Grid textAlign={"center"}>Comment</Grid>
            <Grid textAlign={"right"}>Share</Grid>
          </Box>
        </CardContent>
      </StyledCard>
    </>
  );
}
