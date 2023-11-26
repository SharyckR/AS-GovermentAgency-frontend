import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

export default function LegalHistoryComponent() {
    const [caseData, setCaseData] = useState({});
    const [selectedCase, setSelectedCase] = useState("0");
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [caseOptions, setCaseOptions] = useState([]);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchCaseData = async (selectedId) => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/legal-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTgiLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IkxlZ2FsIEFnZW5jeSIsImtleSI6IiQyYiQxMiR0YTQ3UzlDR2RFQUJKeHVKamVrd1JPL2pXTTAxcEFtNGxSTEpNOWFMcXdUWGo5QVRGcnhwVyIsImV4cCI6MTczMjQ4MTkyOX0.npIV38mr41r_fFwi4VThBebnzapG_So9P3YYGVANnLQ',
                    },
                });
                const data = await response.json();
                console.log('Data: ', data)
        
                if ('Legal Agencies' in data && Array.isArray(data['Legal Agencies'])) {
                    const selectedAgency = data['Legal Agencies'].find((agencyData) => {
                        const agencyKey = Object.keys(agencyData)[0];
                        const agencyInfo = agencyData[agencyKey];
        
                        if (agencyInfo && agencyInfo.case_histories) {
                            const selectedCaseItem = agencyInfo.case_histories.find(caseData => {
                                const caseKey = Object.keys(caseData)[0];
                                const caseH = caseData[caseKey];
                                return caseH.id_history === parseInt(selectedId);
                            });
        
                            if (selectedCaseItem) {
                                const key = Object.keys(selectedCaseItem)[0];
                                setCaseData(selectedCaseItem[key]);
                                setShowAdditionalInfo(true);
                                return true;
                            } else {
                                console.error('Case not found for id:', selectedId);
                            }
                        }
        
                        return false;
                    });
        
                    console.log('Selected Agency: ', selectedAgency);
        
                    if (!selectedAgency) {
                        console.error('Agency not found for id:', selectedId);
                    }
                } else {
                    console.error('Invalid data format for case data:', data);
                }
            } catch (error) {
                console.error('Error fetching case data:', error);
            }
        };  

        const fetchCaseOptions = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/legal-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTgiLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IkxlZ2FsIEFnZW5jeSIsImtleSI6IiQyYiQxMiR0YTQ3UzlDR2RFQUJKeHVKamVrd1JPL2pXTTAxcEFtNGxSTEpNOWFMcXdUWGo5QVRGcnhwVyIsImV4cCI6MTczMjQ4MTkyOX0.npIV38mr41r_fFwi4VThBebnzapG_So9P3YYGVANnLQ',
                    },
                });
                const responseData = await response.json();
                console.log('Response Data: ', responseData)

                if ('Legal Agencies' in responseData && Array.isArray(responseData['Legal Agencies'])) {
                    const options = responseData['Legal Agencies']
                        .flatMap(agency => {
                            const key = Object.keys(agency)[0];
                            return agency[key].case_histories.map(caseH => {
                                return {
                                    label: `Case ${caseH[dniLogin].id_history}`,
                                    value: caseH[dniLogin].id_history.toString()
                                };
                            });
                        });
                        
                    setCaseOptions(options);
                } else {
                    console.error('Invalid data format for case options:', responseData);
                }
            } catch (error) {
                console.error('Error fetching case options:', error);
            }
        };

        if (selectedCase !== "0") {
            fetchCaseData(selectedCase);
        } else {
            setShowAdditionalInfo(false);
        }

        fetchCaseOptions();
    }, [selectedCase]);

    const handleChangeCase = (event) => {
        setSelectedCase(event.target.value);
    };

    return (
        <div>
            <div className="container-left" style={{ marginTop: '20px ' }}>
                <FormControl fullWidth style={{ border: '5px solid black', marginLeft: '100px ' }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedCase}
                        label="Case"
                        onChange={handleChangeCase}
                    >
                        <MenuItem value="0">Select a Case</MenuItem>
                        {caseOptions.map((option, index) => (
                            <MenuItem key={index} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {showAdditionalInfo && selectedCase !== "0" && (
                    <>
                        <div className="rectangle-container-top">
                            <div className="rectangule-left-top">CASE</div>
                            <div className="rectangule-right-top">{caseData.case}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">DESCRIPTION</div>
                            <div className="rectangule-right">{caseData.description_case}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">JURISDICTION</div>
                            <div className="rectangule-right">{caseData.jurisdiction}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">LAWYER IN CHARGE</div>
                            <div className="rectangule-right">{caseData.lawyer}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">ARRESTED?</div>
                            <div className="rectangule-right">{caseData.arrested}</div>
                        </div>
                        <div className="rectangle-container-bottom">
                            <div className="rectangule-left-bottom">DATE</div>
                            <div className="rectangule-right-bottom">{caseData.date_arrested}</div>
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