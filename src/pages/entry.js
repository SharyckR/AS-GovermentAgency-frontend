
// entry.js
import React, { useState } from 'react';
import './styles-pages.css';
import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';
import { Button, TextField } from '@mui/material';
import { RegisterLink } from '../components/link_pages';
import { useAuth } from '../AuthContext';

function LogoAndName() {
    return (
        <div className="header-logo">
            <img src={Logo1} alt="logo página" />
            <img src={Logo2} alt="logo página" />
        </div>
    );
}

export default function Entry() {
    const { isAuthenticated, login } = useAuth();
    const [dniLogin, setDniLogin] = useState('');
    const [token, setToken] = useState('');
    const [showTokenInput, setShowTokenInput] = useState(false);

    const sendToken = async () => {       
        const response = await fetch('https://api-goverment-agency.onrender.com/authentication/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                'username': dniLogin,
                'password': dniLogin,
            }),
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error('Error sending token:', errorBody);
        }else {
            localStorage.setItem("dniLogin", dniLogin);
            console.log('Bienvenido de nuevo' , dniLogin);
        }
    };
    
    const verifyToken = async (token) => {
        const response = await fetch('https://api-goverment-agency.onrender.com/authentication/verify-token', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        });
    
        if (!response.ok) {
            throw new Error('Error verifying token');
        }
    };

    const handleTokenSend = async () => {
        await sendToken(dniLogin);
        setShowTokenInput(true);
    };
    
    const handleTokenVerify = async () => {
        try {
            await verifyToken(token);
            if (!isAuthenticated) {
                login();
            }
        } catch (error) {
            console.error('Error verifying token:', error);
        }
    };

    return (
        <div>
            <div className="black-rectangle">
                <div className="grey-rectangle">
                    <LogoAndName />
                    <div className="white-rectangle">
                        <div className="rectangle-entry-top">Login</div>
                        <div className="rectangule-center">
                            <TextField
                            id="standard-basic"
                            label="DNI"
                            name='dniLogin'
                            variant="standard"
                            value={dniLogin}
                            onChange={(e) => setDniLogin(e.target.value)}
                            />
                        </div>
                        {!showTokenInput ? (
                            <Button
                            variant="contained"
                            style={{ backgroundColor: 'black', color: 'white' }}
                            onClick={handleTokenSend}
                            >
                            Send Token
                            </Button>
                        ) : (
                            <>
                                <div className="rectangule-center">
                                    <TextField
                                    id="standard-basic"
                                    label="Token"
                                    variant="standard"
                                    value={token}
                                    onChange={(e) => setToken(e.target.value)}
                                    />
                                </div>
                                <Button
                                    variant="contained"
                                    style={{ backgroundColor: 'black', color: 'white' }}
                                    onClick={handleTokenVerify}
                                >
                                    Verify Token
                                </Button>
                            </>
                        )}
                        <div className="separator"></div>
                        <div className="rectangle-question">Are you new ?</div>
                        <div className="rectangle-entry-bottom">
                            <RegisterLink />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
