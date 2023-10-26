import { Box, Divider, Typography, styled } from "@mui/material";
import { Icon } from "../../components/atoms/Icon";
import one from "../../../public/images/one.png";
import two from "../../../public/images/two.png";
import three from "../../../public/images/three.png";
import dashed from "../../../public/images/dashed.png";
const LandingBodyWrapper = styled(Box)({
  padding: "30px 100px",
});
const LandingBody = styled(Box)({
  height: "80vh",
  backgroundColor: "#EDF8FE",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  padding: "50px",
  // gap: "35px",
});

export const EqPage = () => {
  return (
    <LandingBodyWrapper>
      <LandingBody>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={"15px"}
          paddingBottom={"20px"}
        >
          <Typography variant="b2">
            {
              "Let your friends, family, and co-workers (ananomously) rate your skills."
            }
          </Typography>
          <Typography variant="b3" fontSize={"50px"}>
            {"Ever wondered what others think of you?"}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
        >
          <Icon src={one} />
          <Icon src={dashed} />
          <Icon src={two} />
          <Icon src={dashed} />
          <Icon src={three} />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          flexDirection={"row"}
        >
          <Typography>{"Answer questions on your social skills"}</Typography>
          <Typography style={{ width: "300px" }} align="center">
            {"Let others anonymously answer the same questions about you"}
          </Typography>
          <Typography style={{ width: "300px" }} align="center">
            {
              "Find out where you and other see things the same way - and where not!"
            }
          </Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          flexDirection={"row"}
          bgcolor={"white"}
          borderRadius={"25px"}
          width={"60%"}
          marginLeft={"20%"}
          marginTop={"5%"}
          boxShadow="0px 50px 50px rgba(0, 0, 0, 0.1)"
        >
          <Box height={"250px"} >

          </Box>
        </Box>
      </LandingBody>
    </LandingBodyWrapper>
  );
};
