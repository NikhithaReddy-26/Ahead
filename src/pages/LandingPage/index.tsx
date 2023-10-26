import { Box, Typography, styled } from "@mui/material";
import { Icon } from "../../components/atoms/Icon";
import stars from "../../../public/images/stars.png";
import download from "../../../public/images/download.png";

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


export const LandingPage = ()=>{
    return(
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
)
}