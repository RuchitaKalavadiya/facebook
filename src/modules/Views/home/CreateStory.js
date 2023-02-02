import { Card, styled } from "@mui/material";
import { Box } from "@mui/system";
import FacebookWrapper from "../../Theme/Type2/FacebookWrapper";

const CreateStory = () => {
  const ServiceCard = styled(Card, {})(() => ({
    width: '200px',
    height: '300px',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '12px',
  }))
  return (
    <>
      <FacebookWrapper>
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

          <ServiceCard sx={{ marginRight: '20px' }}>
            Create a photo story
          </ServiceCard>
          <ServiceCard>
            Create a text story
          </ServiceCard>
        </Box>
      </FacebookWrapper>
    </>
  );
};

export default CreateStory;
