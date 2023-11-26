
// basic_information.js
import React, { useState, useEffect } from 'react';
import './style-pages02.css';
import {Icon} from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function BasicInformation () {
    const [value] = useState(0);
    const [personData, setPersonData] = useState(null);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchPersonData = async () => {
            try {
                if (dniLogin) {
                    const response = await fetch(`https://api-goverment-agency.onrender.com/persons/${dniLogin}`, {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTgiLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IkxlZ2FsIEFnZW5jeSIsImV4cCI6MTczMTY4MTg3OH0.IsHvMdH8xITyEJtASHpi__0IwP2r8PUjUBG0vRQ3xJ4',
                        },
                    });
                    const data = await response.json();
                    console.log(data);
                    setPersonData(data);
                }else {
                    console.warn('dniLogin is undefined.');
                }
            } catch (error) {
                console.error('Error fetching person data:', error.message);
            }
        };
        
        fetchPersonData();
    }, [dniLogin]);    
    
    return (
        <div>
            <div className="rectangule-information2"> Basic Information </div>
            {personData && (
                <div key={Object.keys(personData)[0]}>
                    <CustomTabPanel value={value} index={0}>
                        <div className="container-left2" style={{ marginTop: '10px '}}>
                            <div className="rectangle-container2">
                                <div className="rectangule-left2"> DNI </div>
                                <div className="rectangule-right2">{personData[Object.keys(personData)[0]].dni_person}</div>
                            </div>
                            <div className="rectangle-container2">
                                <div className="rectangule-left2"> NAME </div>
                                <div className="rectangule-right2">{personData[Object.keys(personData)[0]].name}</div>
                            </div>
                            <div className="rectangle-container2">
                                <div className="rectangule-left2"> LAST NAME </div>
                                <div className="rectangule-right2">{personData[Object.keys(personData)[0]].last_name}</div> 
                            </div>
                            <div className="rectangle-container2">
                                <div className="rectangule-left2"> ADDRESS </div>
                                <div className="rectangule-right2">
                                    {personData[Object.keys(personData)[0]].address && (
                                        `${personData[Object.keys(personData)[0]].address.street}, ${personData[Object.keys(personData)[0]].address.number}, ${personData[Object.keys(personData)[0]].address.apartment}, ${personData[Object.keys(personData)[0]].address.postal_code}, ${personData[Object.keys(personData)[0]].address.locality}, ${personData[Object.keys(personData)[0]].address.department}, ${personData[Object.keys(personData)[0]].address.country}`
                                    )}
                                </div>
                            </div>
                            <div className="rectangle-container2">
                                <div className="rectangule-left2"> BIRTHDAY </div>
                                <div className="rectangule-right2"><Icon><CalendarMonthIcon fontSize="small" /></Icon>{personData[Object.keys(personData)[0]].birthday}</div>
                            </div>
                        </div>
                    </CustomTabPanel>
                    
                    <CustomTabPanel>
                        <div className="container-right2" style={{ marginTop: '45px '}}>
                            <div className="rectangle-container2">
                                <div className="rectangule-left2"> TYPE OF DNI </div>
                                <div className="rectangule-right2">{personData[Object.keys(personData)[0]].type}</div>
                            </div>
                            <div className="rectangle-container2">
                                <div className="rectangule-left2"> CONTACT </div>
                                <div className="rectangule-right2">{personData[Object.keys(personData)[0]].phone}</div>
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
            )};
        </div>
    )
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
