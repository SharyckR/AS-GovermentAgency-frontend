import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

export default function TrafficFineHistoryComponent() {
    const [fineData, setFineData] = useState({});
    const [selectedFine, setSelectedFine] = useState("0");
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [fineOptions, setFineOptions] = useState([]);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchFineData = async (selectedId) => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/transport-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDciLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IlRyYW5zcG9ydCBBZ2VuY3kiLCJrZXkiOiIkMmIkMTIkNDNSakJmaUhtN0ltMEdDMDBRczZMLkxpaXFieE1EVThmc1lIVGxQOWQudFJzbDM0N1E1SjIiLCJleHAiOjE3MzI0MTk1ODF9.Xq12-ZFkRU_1vIvV8qlMa9vkdWz0yEL6M43MT8BMSCo',
                    },
                });
                const data = await response.json();
                console.log('Data: ', data)
        
                if ('Transport Agencies' in data && Array.isArray(data['Transport Agencies'])) {
                    const selectedAgency = data['Transport Agencies'].find((agencyData) => {
                        const agencyKey = Object.keys(agencyData)[0];
                        const agencyInfo = agencyData[agencyKey];
        
                        if (agencyInfo && agencyInfo.information_fines) {
                            const selectedFineItem = agencyInfo.information_fines.find(fineData => {
                                const fineKey = Object.keys(fineData)[0];
                                const fine = fineData[fineKey];
                                return fine.id_history === parseInt(selectedId);
                            });
        
                            if (selectedFineItem) {
                                const key = Object.keys(selectedFineItem)[0];
                                setFineData(selectedFineItem[key]);
                                setShowAdditionalInfo(true);
                                return true;
                            } else {
                                console.error('Fine not found for id:', selectedId);
                            }
                        }
        
                        return false;
                    });
        
                    console.log('Selected Agency: ', selectedAgency);
        
                    if (!selectedAgency) {
                        console.error('Agency not found for id:', selectedId);
                    }
                } else {
                    console.error('Invalid data format for fine data:', data);
                }
            } catch (error) {
                console.error('Error fetching fine data:', error);
            }
        };  

        const fetchFineOptions = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/transport-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDciLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IlRyYW5zcG9ydCBBZ2VuY3kiLCJrZXkiOiIkMmIkMTIkNDNSakJmaUhtN0ltMEdDMDBRczZMLkxpaXFieE1EVThmc1lIVGxQOWQudFJzbDM0N1E1SjIiLCJleHAiOjE3MzI0MTk1ODF9.Xq12-ZFkRU_1vIvV8qlMa9vkdWz0yEL6M43MT8BMSCo',
                    },
                });
                const responseData = await response.json();
                console.log('Response Data: ', responseData)

                if ('Transport Agencies' in responseData && Array.isArray(responseData['Transport Agencies'])) {
                    const options = responseData['Transport Agencies']
                        .flatMap(agency => {
                            const key = Object.keys(agency)[0];
                            return agency[key].information_fines.map(fine => {
                                return {
                                    label: `Fine ${fine[dniLogin].id_history}`,
                                    value: fine[dniLogin].id_history.toString()
                                };
                            });
                        });

                    setFineOptions(options);
                } else {
                    console.error('Invalid data format for fine options:', responseData);
                }
            } catch (error) {
                console.error('Error fetching fine options:', error);
            }
        };

        if (selectedFine !== "0") {
            fetchFineData(selectedFine);
        } else {
            setShowAdditionalInfo(false);
        }

        fetchFineOptions();
    }, [selectedFine]);

    const handleChangeFine = (event) => {
        setSelectedFine(event.target.value);
    };

    return (
        <div>
            <div className="container-left" style={{ marginTop: '20px ' }}>
                <FormControl fullWidth style={{ border: '5px solid black', marginLeft: '100px ' }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedFine}
                        label="Fine"
                        onChange={handleChangeFine}
                    >
                        <MenuItem value="0">Select a Fine</MenuItem>
                        {fineOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {showAdditionalInfo && selectedFine !== "0" && (
                    <>
                        <div className="rectangle-container-top">
                            <div className="rectangule-left-top">FINE</div>
                            <div className="rectangule-right-top">{fineData.type_fine}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">DESCRIPTION</div>
                            <div className="rectangule-right">{fineData.description_fine}</div>
                        </div>
                        <div className="rectangle-container-bottom">
                            <div className="rectangule-left-bottom">PAID</div>
                            <div className="rectangule-right-bottom">{fineData.paid}</div>
                        </div>
                    </>
                )}
            </div>

            <div className="container-right">
                <img
                    src="https://www.runt.com.co/sites/default/files/images/Imagenes%20secciones/Cabezote%20página%20web_Mesa%20de%20trabajo%201.png"
                    alt="Driving"
                    className="driving-image"
                />
            </div>
        </div>
    );
}
