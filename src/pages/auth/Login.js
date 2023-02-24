// @mui
import { styled } from '@mui/material/styles';
import {Box, Card, Stack, Container, Typography} from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
// sections
import LoginButton from '../../components/LoginButton';
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center', // center logo and button
    backgroundColor: '#fff', // set page background to white
}));

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3, 5, 0, 5), // adjust padding values
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(30, 31, 0, 7),
    },
}));


const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
    backgroundColor: '#fff', // set content area background to white
    color: 'black', // set text color to black
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const LogoStyle = styled(Logo)(({ theme }) => ({
    width: 40,
    border: '1px solid red', // temporary style for debugging
}));


// ----------------------------------------------------------------------

export default function Login() {
    const mdUp = useResponsive('down', 'sm');
    return (
        <Page title="Login">
            <RootStyle>
                <HeaderStyle>
                    <LogoStyle />
                </HeaderStyle>
                {mdUp && (
                    <SectionStyle>
                    </SectionStyle>
                )}
                <Container maxWidth="sm">
                    <ContentStyle>
                        <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                                <Typography variant="h5" gutterBottom>
                                    Let's add some flavour
                                </Typography>
                            </Box>
                        </Stack>
                        <LoginButton />
                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}
