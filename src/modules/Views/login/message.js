import { Grid, Typography } from "@mui/material";

export default function Message({ message, color }) {
  return (
    <>
      <Grid marginTop="15px">
        <Typography sx={{ fontSize: 12, color: color }}>{message}</Typography>
      </Grid>
    </>
  );
}
