import React, { useState } from 'react';
import './style-pages02.css';
import {Icon} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function BasicInformation() {
    const [value] = useState(0);

    return (
        <div>
            <div className="rectangule-information2"> Basic Information </div>

            <CustomTabPanel value={value} index={0}>
                <div className="container-left2" style={{ marginTop: '10px '}}>

                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> TYPE DNI </div>
                        <div className="rectangule-right2"> DNI </div>
                    </div>
                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> NAME </div>
                        <div className="rectangule-right2"> Name </div>
                    </div>
                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> LAST NAME </div>
                        <div className="rectangule-right2"> Last Name </div>
                    </div>
                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> ADDRESS </div>
                        <div className="rectangule-right2"> Address </div>
                    </div>
                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> BIRTHDAY </div>
                        <div className="rectangule-right2"> Birthday <Icon><CalendarMonthIcon fontSize="small" /></Icon> </div>
                    </div>
                </div>
            </CustomTabPanel>
                
            <CustomTabPanel>
            <div className="container-right2" style={{ marginTop: '45px '}}>

                <div className="rectangle-container2">
                    <div className="rectangule-left2"> PERMISSION </div>
                    <div className="rectangule-right2"> Permission </div>
                </div>
                <div className="rectangle-container2">
                    <div className="rectangule-left2"> ENTITY </div>
                    <div className="rectangule-right2"> Entity </div>
                </div>
                <div className="rectangle-container2">
                    <div className="rectangule-left2"> CONTACT </div>
                    <div className="rectangule-right2"> Contact </div>
                </div>
                <div className="container-right22">
                
                    <img
                        src="https://img.freepik.com/vector-premium/transferir-datos-telefono-inteligente-computadora_740756-41.jpg?size=626&ext=jpg"
                        alt="Basic"
                        className="basic-image2"
                    />
                    
                </div>

            </div>
            </CustomTabPanel>
            
        </div>
    );
}

function CustomTabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

