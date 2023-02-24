import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login'
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/callback" element={<CallbackPage />} />
            </Routes>
        </BrowserRouter>
    );
};

const CallbackPage = () => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();

    React.useEffect(() => {
        const handleAuthentication = async () => {
            if (isAuthenticated) {
                const token = await getAccessTokenSilently();
                localStorage.setItem('accessToken', token);
            }
            navigate('/main');
        };
        handleAuthentication();
    }, [isAuthenticated, getAccessTokenSilently, navigate]);

    return (
        <div>
            <h1>Handling callback...</h1>
            <p>Please wait while we redirect you to the main page.</p>
        </div>
    );
};

export default Router;
