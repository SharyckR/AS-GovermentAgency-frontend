
import React, { useState } from 'react';
import './styles-pages.css';
import { Box, Tabs, Tab, Divider } from '@mui/material';
import LegalAgencyComponent from '../components/legal_agency';
import LegalHistoryComponent from '../components/legal_history';

export default function LegalInformation() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <div className="rectangule-information"> Legal Information </div>
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
                    <Tab label="Legal History"/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <LegalAgencyComponent />
            </CustomTabPanel>
            
            <CustomTabPanel value={value} index={2}> 
                <LegalHistoryComponent />
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
