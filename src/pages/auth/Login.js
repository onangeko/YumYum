// @mui
import { styled } from '@mui/material/styles';
import {Box, Card, Stack, Container, Typography} from '@mui/material';

// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Logo from '../../components/Logo';
import Image from '../../components/Image';
// sections
import LoginButton from '../../components/LoginButton';
import {lightGreen} from "@mui/material/colors";
// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

const HeaderStyle = styled('header')(({ theme }) => ({
    top: 0,
    zIndex: 9,
    lineHeight: 0,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    padding: theme.spacing(3),
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
        padding: theme.spacing(7, 5, 0, 7),
    },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
    backgroundColor: lightGreen[300],
    color: 'white'
}));

// ----------------------------------------------------------------------

export default function Login() {

    const smUp = useResponsive('up', 'sm');
    const mdUp = useResponsive('down', 'sm');

    return (
        <Page title="Login">
            <RootStyle>
                <HeaderStyle>
                    <Logo />
                    {smUp && (
                        <Typography variant="body2" sx={{ mt: { md: -2 } }}>
                        </Typography>
                    )}
                </HeaderStyle>

                {mdUp && (
                    <SectionStyle>
                        <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                            Hi, Welcome Back
                        </Typography>
                        <Image visibleByDefault disabledEffect src="" alt="login" />
                    </SectionStyle>
                )}
                <Container maxWidth="sm">
                    <ContentStyle>
                        <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Typography variant="h4" gutterBottom>
                                    Let's add some flavour
                                </Typography>
                                <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
                            </Box>
                        </Stack>
                        <LoginButton/>
                    </ContentStyle>
                </Container>
            </RootStyle>
        </Page>
    );
}