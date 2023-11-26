import { useEffect, useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import './styles-components.css';

export default function HealthHistoryComponent() {
    const [medicalHistory, setMedicalHistory] = useState({});
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [selectedPathology, setSelectedPathology] = useState(0);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchHealthData = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/health-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNjkiLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IkhlYWx0aCBBZ2VuY3kiLCJrZXkiOiIkMmIkMTIkQzhEa0lLZ1hvbUkuUk5mUUQ3RGp1LmdLL2ZIQUxWdC5icTVweGovRTBURGZOMWRDMDdmeXUiLCJleHAiOjE3MzI0ODMwMzh9.UEaObTytb9TLL3QrpE_sTSQnBDaevd1wonpzw25TBP8',
                    },
                });
                const data = await response.json();

                if ('Health Agencies' in data && Array.isArray(data['Health Agencies'])) {
                    const agencyWithMedicalHistory = data['Health Agencies'].find(agency => {
                        const key = Object.keys(agency)[0];
                        const medicalHistoryArray = agency[key].medical_histories;

                        if (Array.isArray(medicalHistoryArray) && medicalHistoryArray.length > 0) {
                            return true;
                        }
                        return false;
                    });

                    if (agencyWithMedicalHistory) {
                        const key = Object.keys(agencyWithMedicalHistory)[0];
                        setMedicalHistory(agencyWithMedicalHistory[key].medical_histories[0][dniLogin]);
                        setShowAdditionalInfo(true);
                    } else {
                        console.error('Medical History not found for the agency.');
                    }
                } else {
                    console.error('Invalid data format for medical history:', data);
                }
            } catch (error) {
                console.error('Error fetching medical history:', error);
            }
        };

        fetchHealthData();
    }, []);

    const handleChangeCase = (event) => {
        setSelectedPathology(event.target.value);
        setShowAdditionalInfo(true);
    };

    return (
        <div>
            <div className="container-left" style={{ marginTop: '20px '}}>
                {showAdditionalInfo && (
                    <>
                        <div className="rectangle-container-top">
                            <div className="rectangule-left-top">TYPE BLOOD</div>
                            <div className="rectangule-right-top">{medicalHistory.type_blood}</div>
                        </div>
                        <FormControl fullWidth style={{ border: '5px solid black', marginTop: '30px', marginLeft: '100px' }}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedPathology}
                                label="Pathologies"
                                onChange={handleChangeCase}
                            >
                                <MenuItem value={0}>
                                    Pathologies
                                </MenuItem>
                                {medicalHistory.pathologies && medicalHistory.pathologies.map((pathology, index) => (
                                    <MenuItem key={index} value={index + 1} disabled>
                                        {pathology === "None" ? "You have no pathologies." : pathology}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div className="rectangle-container">
                            <div className="rectangule-left">TREATMENT</div>
                            <div className="rectangule-right">{medicalHistory.description_treatment}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">DATE TREATMENT</div>
                            <div className="rectangule-right">{medicalHistory.date_treatment}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left"> DOCTOR IN CHARGE</div>
                            <div className="rectangule-right">{medicalHistory.doctor_charge}</div>
                        </div>
                    </>
                )}
            </div>

            <div className="container-right">
                <img
                    src="https://oncenoticias.digital/wp-content/uploads/2022/01/COVID19.jpg"
                    alt="Health"
                    className="health-agency-image"
                    style={{ width: '700px', height: '300px' }}
                />
            </div>
        </div>
    );

}
