import { Card } from "@mui/material";
import { Box, height } from "@mui/system";
import FacebookWrapper from "../../Theme/Type2/FacebookWrapper";


const CreateStory = () => {
  return (
    <>
      <FacebookWrapper>
        <Box justifyContent='center'>
          <Box display='flex' >
            <Card sx={{ width: '200px', height: '250px' }}>
              Create a photo story
            </Card>
            <Card sx={{ width: '200px', height: '250px' }}>
              Create a text story
            </Card>
          </Box>

        </Box>
      </FacebookWrapper>
    </>
  );
};

export default CreateStory;
