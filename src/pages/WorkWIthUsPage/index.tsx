import { Box, Typography, styled } from "@mui/material";
import { WorkBoxes } from "../../components/molecules/WorkBoxes";
import { data } from "../../utils/constants";
import { AboutBox } from "../../components/molecules/AboutBox";

const WorkWrapper = styled(Box)({
  padding: "50px 100px",
  marginTop: "60px",
  height: "90vh",
});
const WorkBody = styled(Box)({
  height: "90vh",

  backgroundColor: "#F3F1FF",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "column",
  padding: "100px 70px 10px 100px ",
  gap: "50px",
});
const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "space-between",
  flexDirection: "column",
  gap: "20px",
  marginRight: "2%",
  paddingRight: "5%",
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    width: "5px",
    padding: "10px",
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: "#FFFFFF",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#B3A0FA",
    borderRadius: "4px",
  },
  "::-webkit-scrollbar-thumb:hover": {
    backgroundColor: "#555",
  },
});

export const WorkWithUsPage = () => {
  return (
    <WorkWrapper>
      <WorkBody>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box>
            <Typography variant="b5">{"Work with us"}</Typography>
          </Box>
          <Box marginRight={"10%"}>
            <Typography variant="b5" color={"#5F3EEF"}>
              {"ahead"}
            </Typography>
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} height={"680px"}>
          <AboutBox />
          <StyledBox>
            {data.map((item) => (
              <WorkBoxes
                key={item.id}
                title={item.title}
                content={item.content}
              />
            ))}
          </StyledBox>
        </Box>
      </WorkBody>
    </WorkWrapper>
  );
};
