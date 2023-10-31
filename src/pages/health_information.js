import React, { useState } from 'react';
import './style-pages02.css';
import { Box, Tabs, Tab, Divider, Icon, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function HealthInformation() {
    const [selectedCase, setSelectedCase] = useState(0);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeCase = (event) => {
        setSelectedCase(event.target.value);
        setShowAdditionalInfo(true);
    };
    return (
        <div>
            <div className="rectangule-information2"> Health Information </div>
            <Box>
                <Tabs 
                value={value}
                onChange={handleChange}
                indicatorColor="black"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example" 
                className="rectangule2">
                    <Tab label="Agency Information"/>
                    <Divider orientation="vertical" flexItem style={{ width: '2px', backgroundColor: 'black'}} />
                    <Tab label="Medical History"/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <div className="container-left2" style={{ marginTop: '10px '}}>
                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> NIT </div>
                        <div className="rectangule-right2"> NIT </div>
                    </div>

                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> NAME OF AGENCY </div>
                        <div className="rectangule-right2"> Name of Agency </div>
                    </div>

                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> E-mail </div>
                        <div className="rectangule-right2"> Hotmail/Gmail </div>
                    </div>

                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> CONTACT </div>
                        <div className="rectangule-right2"> E-Mail or Phone Number </div>
                    </div>

                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> ADDRESS </div>
                        <div className="rectangule-right2"> Address </div>
                    </div>
                    
                </div>
                <div className="container-right2" style={{ marginTop: '40px '}}>
                    <img
                        src="https://oncenoticias.digital/wp-content/uploads/2022/01/COVID19.jpg"
                        alt="Healt"
                        className="healt-image"
                    />
                </div>
            </CustomTabPanel>
                
            

            <CustomTabPanel value={value} index={2}> 
                <div className="container-left2" style={{ marginTop: '40px '}}>
                    <div>
                        <FormControl fullWidth style={{ border: '5px solid black', marginLeft: '100px '}}>
                            <InputLabel id="demo-simple-select-label">Pathologies</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedCase}
                                label="Pathologies"
                                onChange={handleChangeCase}>
                                <MenuItem value={0}>Pathologies</MenuItem>
                                <MenuItem value={1}>Pathologies 1</MenuItem>
                                <MenuItem value={2}>Pathologies 2</MenuItem>
                                <MenuItem value={3}>Pathologies 3</MenuItem>
                                <MenuItem value={4}>Pathologies 4</MenuItem>
                                <MenuItem value={5}>Pathologies 5</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> TYPE OF BLOOD </div>
                        <div className="rectangule-right2"> Type Of Blood</div>
                    </div>

                    <div className="rectangle-container2">
                        <div className="rectangule-left">TREATMENT</div>
                        <div className="rectangule-right">Treatment</div>
                    </div>
                    <div className="rectangle-container2">
                        <div className="rectangule-left">DATE TREATMENT</div>
                        <div className="rectangule-right">Date Treatment<Icon> <CalendarMonthIcon fontSize="small" /> </Icon> </div>
                    </div>
                    <div className="rectangle-container2">
                        <div className="rectangule-left2"> DOCTOR IN CHARGE</div>
                        <div className="rectangule-right2"> Name Of The Doctor In Charge</div>
                    </div>

                </div>

                


                <div className="container-right2" style={{ marginTop: '40px '}}>
                    <img
                        src="https://oncenoticias.digital/wp-content/uploads/2022/01/COVID19.jpg"
                        alt="Healt"
                        className="healt-image"
                    />
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
