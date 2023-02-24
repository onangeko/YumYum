import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {Button} from "@mui/material";
import {styled} from "@mui/material/styles";
import {lightGreen} from "@mui/material/colors";

const LoginButton = () => {
    const {loginWithRedirect,isAuthenticated} = useAuth0();

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(lightGreen[500]),
        backgroundColor: lightGreen[500],
        '&:hover': {
            backgroundColor: lightGreen[700],
        },

    }));

    return(
        !isAuthenticated && (
            <ColorButton size="large" color="secondary" onClick={() => loginWithRedirect()}>
                Yum Yum !
            </ColorButton>
        )
    )
};

export default LoginButton;