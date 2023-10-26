import { Box, Typography, styled } from "@mui/material"
import ButtonComp from "../../components/atoms/Button"

const Wrapper = styled(Box)({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "90vh",
    gap:"15px"
})
export const StartTestPage = () =>{
    return(

        <Wrapper>
            <Typography variant="body1">{"We take privacy seriously"}</Typography>
            <Typography variant="b4" fontSize={"10px"}>{"Before you get started"}</Typography>
            <Box width={"30%"}>
            <Typography align="center" fontSize={"20px"} variant="body1">{"\"We won't share your answers with anyone (and won't ever tell you which friends said what about you)\""}</Typography></Box>
            <Typography>{"With Love, "}</Typography>
            <ButtonComp value={<Typography variant="body1" fontSize={"15px"}>{"start a test"}</Typography>} buttonStyle={"contained"} styles={{background:"black", color:"white", height:"40px", width:"110px", textTransform:"none", borderRadius:"20px"}}/>
            <Typography fontSize={"10px"}>{"Take only 5 minutes"}</Typography>
        </Wrapper>
    )
}