import { Box, Stack, Typography, styled } from "@mui/material"
import { Icon } from "../../atoms/Icon"
import doll from "../../../../public/images/workdoll.png"
const Wrapper = styled(Box)({
 display: 'flex',
 flexDirection: 'column',
 height: '600px',
 width: '550px',
 boxShadow: "0px 50px 50px rgba(0, 0, 0, 0.1)",
 backgroundColor:"white",
 borderRadius: '20px',
})
const TopBox = styled(Stack)({
    height: '60%',
    backgroundColor: 'white',
    padding:"30px",
    borderRadius: '20px',
   
})
const BottomBox = styled(Stack)({
    backgroundColor:"#FEF6F1",
    height: "40%",
    borderRadius: '20px',
    padding:"30px",
    gap: "25px"
})
export const AboutBox = ()=>{
    return(
        <Wrapper>
            <TopBox spacing={4} direction={"column"}>
            <Box>
                <Icon src={doll}/>
      <Typography
        variant="body1"
        fontSize={"25px"}
        fontWeight={800}
        lineHeight={"20px"}
      >
        {"About"}
      </Typography></Box>
      <Box>
      <Typography
        variant="body1"
        fontSize={"20px"}
        fontWeight={400}
        lineHeight={"40px"}
      >
        {"At ahead our goal is to make simple changes to the application and make the application more responsive and more user friendly when using the keyboard shortcuts in the application "}
      </Typography></Box>
            </TopBox>
            <BottomBox spacing={2} direction={"column"}>
            <Box>
      <Typography
        variant="body1"
        fontSize={"25px"}
        fontWeight={800}
        lineHeight={"20px"}
      >
        {"Product"}
      </Typography></Box>
      <Box>
      <Typography
        variant="body1"
        fontSize={"20px"}
        fontWeight={400}
        lineHeight={"40px"}
      >
        {"Product Details Details Details are available at some point in the future"}
      </Typography></Box>
            </BottomBox>
        </Wrapper>
    )
}