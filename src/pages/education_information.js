import React, { useState } from 'react';
import './styles-pages.css';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab, Divider, Typography } from '@mui/material';
import EducationAgencyComponent from '../components/education_agency';
import EducationHistoryComponent from '../components/education_history';

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

export default function EducationInformation() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="educational" style={{width: '100%', padding: '0 0 60px 0', minHeight: '100vh' }}> 
            <div className="rectangule-information"> Educational Information </div>
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
                    <Tab label="Agency Information" style ={{ color: 'white', fontWeight: 'bold' }}/>
                    <Divider orientation="vertical" flexItem style={{ width: '2px', backgroundColor: 'black'}} />
                    <Tab label="Education History" style ={{ backgroundColor: '#D1D1D1', fontWeight: 'bold' }}/>
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0} >
                <EducationAgencyComponent />
            </CustomTabPanel>
            
            <CustomTabPanel value={value} index={2}> 
                <EducationHistoryComponent />
            </CustomTabPanel>
        </div>
    );
}
