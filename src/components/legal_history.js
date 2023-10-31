
import './styles-components.css';
import React, { useState } from 'react';
import { Icon, FormControl, Select, MenuItem } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function LegalHistoryComponent() {
    const [selectedCase, setSelectedCase] = useState(0);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

    const handleChangeCase = (event) => {
        setSelectedCase(event.target.value);
        setShowAdditionalInfo(true);
    };

    return (
        <div>
            <div className="container-left" style={{ marginTop: '40px '}}>
                <FormControl fullWidth style={{ border: '5px solid black', marginLeft: '100px '}}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCase}
                        label="Case"
                        onChange={handleChangeCase}
                    >
                        <MenuItem value={0}>Select a Case</MenuItem>
                        <MenuItem value={1}>Case 1</MenuItem>
                        <MenuItem value={2}>Case 2</MenuItem>
                        <MenuItem value={3}>Case 3</MenuItem>
                    </Select>
                </FormControl>

                {showAdditionalInfo && selectedCase !== 0 && (
                    <>
                    <div className="rectangle-container-top">
                        <div className="rectangule-left-top">DESCRIPTION</div>
                        <div className="rectangule-right-top">Description of Case</div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left">JURISDICTION</div>
                        <div className="rectangule-right">Jurisdiction</div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left">LAWYER</div>
                        <div className="rectangule-right">Lawyer</div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left">ARRESTED?</div>
                        <div className="rectangule-right">Was there an arrest?</div>
                    </div>
                    <div className="rectangle-container-bottom">
                        <div className="rectangule-left-bottom">DATE</div>
                        <div className="rectangule-right-bottom">Date of Arrest <Icon> <CalendarMonthIcon fontSize="small" /> </Icon> </div>
                    </div>
                    </>
                )}
            </div>

            <div className="container-right">
                <img
                    src="https://img.freepik.com/fotos-premium/martillo-juez-abogados-justicia-que-tienen-reunion-equipo-bufete-abogados-conceptos-derecho-servicios-legales_265022-21654.jpg?w=360"
                    alt="Legal"
                    className="legal-image"
                />
            </div>
        </div>
        
    );
}
