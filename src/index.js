import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HelmetProvider} from "react-helmet-async";
import {Auth0Provider} from "@auth0/auth0-react";


const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;


root.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
            redirect_uri: "http://localhost:3000/callback"
        }}
        useRefreshTokens
        cacheLocation="localstorage"
    >
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </Auth0Provider>

);
