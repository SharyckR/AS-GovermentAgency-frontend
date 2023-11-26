
import React, { useState } from 'react';
import './styles-pages.css';
import { Box, Tabs, Tab, Divider } from '@mui/material';
import HealthAgencyComponent from '../components/health-agency';
import HealthHistoryComponent from '../components/medical-history';

export default function HealthInformation() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue); 
    };

    return (
        <div style={{ padding: '0 0 60px 0', minHeight: '100vh' }}>
            <div className="rectangule-information"> Health Information </div>
            <Box>
                <Tabs 
                value={value}
                onChange={handleChange}
                indicatorColor="black"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example" 
                className="rectangule">
                    <Tab label="Agency Information"/>
                    <Divider orientation="vertical" flexItem style={{ width: '2px', backgroundColor: 'black'}} />
                    <Tab label="Medical History"/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <HealthAgencyComponent />
            </CustomTabPanel>
            
            <CustomTabPanel value={value} index={2}> 
                <HealthHistoryComponent />
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
