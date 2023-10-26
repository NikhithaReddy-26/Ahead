import { Box, Typography, styled } from "@mui/material";

const MeetWrapper = styled(Box)({
  padding: "50px 100px",
  marginTop: "60px",
  height: "90vh",
});
const MeetBody = styled(Box)({
  height: "75vh",
  backgroundColor: "#FEF6F1",
  borderRadius: "50px",
  display: "flex",
  flexDirection: "row",
  padding: "50px",
  gap: "50px",
});

const RightBox = styled(Box)({
  width: "50%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "25px",
});
const LeftBox = styled(Box)({
  width: "50%",
  marginTop: "100px",
});
export const MeetPage = () => {
  return (
    <MeetWrapper>
      <MeetBody>
        <LeftBox>
          <Box display={"flex"} flexDirection={"column"} gap={"35px"}>
            <Typography variant="b2">{"Built out of frustration"}</Typography>
            <Typography variant="b5">{"Meet the ahead app"}</Typography>
          </Box>
          <Box width={"70%"} display={"flex"} gap={"35px"}>
            <Typography>{"Image"}</Typography>
          </Box>
        </LeftBox>
        <RightBox width={"50%"}>
          <Typography
            variant="body1"
            fontSize={"20px"}
            fontWeight={400}
            lineHeight={"40px"}
          >
            {
              "At ahead our goal is to make simple changes to the application and make the application more responsive and more user friendly when using the keyboard shortcuts in the application "
            }
          </Typography>
          <Typography
            variant="body1"
            fontSize={"20px"}
            fontWeight={400}
            lineHeight={"40px"}
          >
            {
              "At ahead our goal is to make simple changes to the application and make the application application "
            }
          </Typography>
        </RightBox>
      </MeetBody>
    </MeetWrapper>
  );
};
