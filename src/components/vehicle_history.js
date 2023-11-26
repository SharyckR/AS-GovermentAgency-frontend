import { useState, useEffect } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';

export default function VehicleHistoryComponent() {
    const [vehicleData, setVehicleData] = useState({});
    const [ownerFullName, setOwnerFullName] = useState('');
    const [selectedVehicle, setSelectedVehicle] = useState("0");
    const [vehicleOptions, setVehicleOptions] = useState([]);
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchPersonData = async (dniLogin) => {
            try {
                const response = await fetch(`https://api-goverment-agency.onrender.com/persons/${dniLogin}`, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDciLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IlRyYW5zcG9ydCBBZ2VuY3kiLCJrZXkiOiIkMmIkMTIkNDNSakJmaUhtN0ltMEdDMDBRczZMLkxpaXFieE1EVThmc1lIVGxQOWQudFJzbDM0N1E1SjIiLCJleHAiOjE3MzI0MTk1ODF9.Xq12-ZFkRU_1vIvV8qlMa9vkdWz0yEL6M43MT8BMSCo',
                    },
                });
                const personData = await response.json();
                console.log(personData)
        
                if (response.ok) {
                    if (personData && personData[dniLogin] && personData[dniLogin].name && personData[dniLogin].last_name) {
                        setOwnerFullName(`${personData[dniLogin].name} ${personData[dniLogin].last_name}`);
                    } else {
                        console.error('Invalid person data format:', personData);
                    }
                } else {
                    console.error('Error fetching person data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching person data:', error.message);
            }
        };
        
        const fetchVehicleData = async (selectedVehicle) => {
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
        
                        if (agencyInfo && agencyInfo.information_vehicles) {
                            const selectedVehicleItem = agencyInfo.information_vehicles.find(vehicleData => {
                                const vehicleKey = Object.keys(vehicleData)[0];
                                const vehicle = vehicleData[vehicleKey];
                                return vehicle.plate_vehicle === selectedVehicle;
                            });
        
                            if (selectedVehicleItem) {
                                const key = Object.keys(selectedVehicleItem)[0];
                                setVehicleData(selectedVehicleItem[key]);
                                setShowAdditionalInfo(true);
                                fetchPersonData(dniLogin);
                                return true;
                            } else {
                                console.error('Vehicle not found for level:', selectedVehicle);
                            }
                        }
                        return false;
                    });
        
                    console.log('Selected Agency: ', selectedAgency);
        
                    if (!selectedAgency) {
                        console.error('Agency not found for vehicle:', selectedVehicle);
                    }
                } else {
                    console.error('Invalid data format for vehicle data:', data);
                }
            } catch (error) {
                console.error('Error fetching vehicle data:', error);
            }
        };  

        const fetchVehicleOptions = async () => {
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
                            return agency[key].information_vehicles.map(vehicle => {
                                return {
                                    label: `Plate of Vehicle: ${vehicle[dniLogin].plate_vehicle}`,
                                    value: vehicle[dniLogin].plate_vehicle
                                };
                            });
                        });

                    setVehicleOptions(options);
                } else {
                    console.error('Invalid data format for vehicle options:', responseData);
                }
            } catch (error) {
                console.error('Error fetching vehicle options:', error);
            }
        };

        if (selectedVehicle !== "0") {
            fetchVehicleData(selectedVehicle);
        } else {
            setShowAdditionalInfo(false);
        }

        fetchVehicleOptions();
    }, [selectedVehicle]);

    const handleChangeVehicle = (event) => {
        setSelectedVehicle(event.target.value);
    };
    
    return (
        <div>
            <div className="container-right-2" style={{ marginTop: '40px ' }}>
                <div className="container-top-2">{ownerFullName}</div>
                <FormControl fullWidth style={{ border: '5px solid black', justifyContent: 'center', marginTop: '20px', marginLeft: '230px' }}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectedVehicle}
                        label="Vehicles"
                        onChange={handleChangeVehicle}
                    >
                        <MenuItem value="0">Select a vehicle</MenuItem>
                        {vehicleOptions.map((option, index) => (
                            <MenuItem key={index} value={option.value} disabled={option.value === "None"}>
                                {option.value === "None" ? "Usted no tiene ningún vehículo a su nombre" : option.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {showAdditionalInfo && selectedVehicle !== "0" && (
                    <>
                        <div className="rectangle-container-top">
                            <div className="rectangule-left-top">PLATE</div>
                            <div className="rectangule-right-top">{vehicleData.plate_vehicle}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">DESCRIPTION</div>
                            <div className="rectangule-right">{vehicleData.description_vehicle}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left">TYPE</div>
                            <div className="rectangule-right">{vehicleData.type_vehicle}</div>
                        </div>
                        <div className="rectangle-container-bottom">
                            <div className="rectangule-left-bottom">INSURANCE YEAR</div>
                            <div className="rectangule-right-bottom">{vehicleData.insurance}</div>
                        </div>
                    </>
                )}
            </div>

            <div className="container-left-2">
                <img
                    src="https://www.carroya.com/noticias/sites/default/files/vende_tu_carro_carroya.webp"
                    alt="Vehicle"
                    className="vehicle-image"
                    style={{ width: '600px', height: '400px' }}
                />
            </div>
        </div>
    );
}
