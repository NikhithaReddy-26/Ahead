import { Box, Stack, Typography, styled } from "@mui/material";
const Wrapper = styled(Stack)({
  minHeight: "220px",
  width: "400px",
  backgroundColor: "white",
  borderRadius: "30px",
  padding: "50px 50px 0 50px",
  gap: "25px",
  //   boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.1)"
});
export interface WorkboxProps {
  title: string;
  content: string;
}
export const WorkBoxes = ({ title, content }: WorkboxProps) => {
  return (
    <Wrapper>
      <Box>
        <Typography
          variant="body1"
          fontSize={"20px"}
          fontWeight={800}
          lineHeight={"20px"}
        >
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="body1"
          fontSize={"16px"}
          fontWeight={400}
          lineHeight={"25px"}
        >
          {content}
        </Typography>
      </Box>
    </Wrapper>
  );
};
