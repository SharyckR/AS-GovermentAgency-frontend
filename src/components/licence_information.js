import React, { useState, useEffect } from 'react';
import './styles-components.css';

export default function LicenceInformationComponent() {
    const [vehicleHistory, setVehicleHistory] = useState({});
    const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchVehicleHistory = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/transport-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDciLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IlRyYW5zcG9ydCBBZ2VuY3kiLCJrZXkiOiIkMmIkMTIkNDNSakJmaUhtN0ltMEdDMDBRczZMLkxpaXFieE1EVThmc1lIVGxQOWQudFJzbDM0N1E1SjIiLCJleHAiOjE3MzI0MTk1ODF9.Xq12-ZFkRU_1vIvV8qlMa9vkdWz0yEL6M43MT8BMSCo',
                    },
                });
                const data = await response.json();
    
                if ('Transport Agencies' in data && Array.isArray(data['Transport Agencies'])) {
                    const agencyWithVehicleHistory = data['Transport Agencies'].find(agency => {
                        const key = Object.keys(agency)[0];
                        const vehicleHistoryArray = agency[key].information_vehicles;
                        
                        if (Array.isArray(vehicleHistoryArray) && vehicleHistoryArray.length > 0) {
                            const vehicleHistoryItem = vehicleHistoryArray[0][dniLogin];
                            if (vehicleHistoryItem) {
                                return true;
                            }
                        }
                        return false;
                    });
    
                    if (agencyWithVehicleHistory) {
                        const key = Object.keys(agencyWithVehicleHistory)[0];
                        setVehicleHistory(agencyWithVehicleHistory[key].information_vehicles[0][dniLogin]);
                        setShowAdditionalInfo(true);
                    } else {
                        console.error('Licence information not found for the agency.');
                    }
                } else {
                    console.error('Invalid data format for licence information:', data);
                }
            } catch (error) {
                console.error('Error fetching licence information:', error);
            }
        };
    
        fetchVehicleHistory();
    }, []);

    return (
        <div>
            <div className="container-left" style={{ marginTop: '20px '}}>
                {showAdditionalInfo && vehicleHistory.licence === "Yes" ? (
                    <>
                        <div className="rectangle-container-top">
                            <div className="rectangule-left-top"> DRIVER's LICENCE NUMBER </div>
                            <div className="rectangule-right-top">{vehicleHistory.number_licence}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left"> TYPE OF LICENCE </div>
                            <div className="rectangule-right">{vehicleHistory.type_licence}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left"> LICENCE EXPEDITION DATE </div>
                            <div className="rectangule-right">{vehicleHistory.expedition_date}</div>
                        </div>
                        <div className="rectangle-container-bottom">
                            <div className="rectangule-left-bottom"> LICENCE EXPIRATION DATE </div>
                            <div className="rectangule-right-bottom">{vehicleHistory.expiration_date}</div>
                        </div>
                    </>
                ) : ( 
                    <div style={{ textAlign: 'center', marginLeft: '150px' }}>
                        <h1>Usted no posee una licencia.</h1>
                    </div>
                )}
            </div>
            <div className="container-right">
                <img
                    src="http://cpbroker.com.co/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-13-at-1.01.57-PM.jpeg"
                    alt="Transport"
                    className="transport-agency-image"
                    style={{ width: '600px', height: '300px' }}
                />
            </div>
        </div>
        
    );
}
