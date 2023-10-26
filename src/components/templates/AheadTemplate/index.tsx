import { Box, styled } from '@mui/material';
import { Navbar } from '../../molecules/Navbar';

export interface templateprops {
    body: React.ReactNode;
    label:number;
}
const Wrapper = styled(Box)({
    width: '100vw',
    height: '100vh'
});
const Body = styled(Box)({
    padding: '30px 20px 20px 2Opx'
});
const HeaderSection = styled(Box)({});
const Content = styled(Box)({});
export const StakeholderTemplate = ({ body,label }: templateprops) => {
    return (
        <Wrapper>
            <HeaderSection>
                <Navbar />
            </HeaderSection>
            <Body>
                <Content>{body}</Content>
            </Body>
        </Wrapper>
    );
};
