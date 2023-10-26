import { Box, Typography, styled } from "@mui/material";
import ButtonComp from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import stars from "../../../../public/images/stars.png";
import download from "../../../../public/images/download.png";
import logo from "../../../../public/images/logo.png";
import { EqPage } from "../../../pages/EqPage";
import { StartTestPage } from "../../../pages/StartTestPage";
const Wrapper = styled(Box)({
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "5px 200px 5px 200px",
  zIndex: 1,
  position: "fixed", // Set the position to fixed
  top: 0, // Fixed to the top of the screen
  left: 0, // Fixed to the left of the screen
  width: "100%", // Expand to the full width
  backgroundColor: "white", // Set the background color if needed
  // border: "1px solid black"
});

const MidWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "50px",
});
const LandingBodyWrapper = styled(Box)({
  padding: "60px 100px",
  marginTop: "60px",
});
const LandingBody = styled(Box)({
  height: "80vh",
  backgroundColor: "#EEEBFE",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  paddingLeft: "50px",
  gap: "50px",
});
export const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Icon src={logo} />
        <MidWrapper>
          <Typography variant="b2">{"Emotions"}</Typography>
          <Typography variant="b2">{"Manifesto"}</Typography>
          <Typography variant="b2">{"self-awareness test"}</Typography>
          <Typography variant="b2">{"Work with us"}</Typography>
        </MidWrapper>
        <ButtonComp
          value={"Download app"}
          buttonStyle={"contained"}
          styles={{
            background: "black",
            height: "60px",
            width: "170px",
            borderRadius: "50px",
            color: "white",
            textTransform: "none",
          }}
        />
      </Wrapper>
      <LandingBodyWrapper>
        <LandingBody>
          <Box
            width={"45%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"35px"}
          >
            <Typography variant="b2">{"Ahead app"}</Typography>
            <Typography variant="b1">
              {"Master your life by mastering emotions"}
            </Typography>
          </Box>
          <Box width={"70%"} display={"flex"} gap={"35px"}>
            <Icon src={download} />
            <Icon src={stars} />
          </Box>
        </LandingBody>
      </LandingBodyWrapper>
      <EqPage />
      <StartTestPage />
    </>
  );
};
