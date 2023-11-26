
import React, { useState } from 'react';
import './styles-pages.css';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Divider, Typography } from '@mui/material';
import DrivingHistoryComponent from '../components/driving_history';
import VehicleHistoryComponent from '../components/vehicle_history';
import TransportAgencyComponent from '../components/transport_agency';
import LicenceInformationComponent from '../components/licence_information';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function TransportInformation() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ padding: '0 0 60px 0', minHeight: '100vh' }}>
            <div className="rectangule-information"> Transport Information </div>
            <Box>
                <Tabs 
                    value={value}
                    onChange={handleChange}
                    indicatorColor="black"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example" 
                    className="rectangule"
                >
                    <Tab label="Agency Information" />
                    <Divider orientation="vertical" flexItem style={{ width: '2px', backgroundColor: 'black'}} />
                    <Tab label="Licence Information" />
                    <Divider orientation="vertical" flexItem style={{ width: '2px', backgroundColor: 'black'}} />
                    <Tab label="Vehicle History" />
                    <Divider orientation="vertical" flexItem style={{ width: '2px', backgroundColor: 'black'}} />
                    <Tab label="Driving History" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TransportAgencyComponent />
            </CustomTabPanel>
            
            <CustomTabPanel value={value} index={2}> 
                <LicenceInformationComponent />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}> 
                <VehicleHistoryComponent />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={6}> 
                <DrivingHistoryComponent />
            </CustomTabPanel>
        </div>
    );
}
