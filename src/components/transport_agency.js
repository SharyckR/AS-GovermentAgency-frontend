import { useEffect, useState } from 'react';
import './styles-components.css';

export default function TransportAgencyComponent() {
    const [transportAgencies, setTransportAgencies] = useState([]);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchTransportAgencies = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/transport-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxNDciLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IlRyYW5zcG9ydCBBZ2VuY3kiLCJrZXkiOiIkMmIkMTIkNDNSakJmaUhtN0ltMEdDMDBRczZMLkxpaXFieE1EVThmc1lIVGxQOWQudFJzbDM0N1E1SjIiLCJleHAiOjE3MzI0MTk1ODF9.Xq12-ZFkRU_1vIvV8qlMa9vkdWz0yEL6M43MT8BMSCo',
                    },
                });
                const data = await response.json();
                console.log(data);

                const transportAgenciesArray = Array.isArray(data['Transport Agencies']) ? data['Transport Agencies'] : [];
                setTransportAgencies(transportAgenciesArray);
            } catch (error) {
                console.error('Error fetching legal agencies:', error);
            }
        };
        
        fetchTransportAgencies();
    }, []);
    
    const dniToSearch = dniLogin;

    const filteredAgency = transportAgencies.find((agency) => {
        const firstPropertyKey = Object.keys(agency)[0];
        const agencyData = agency[firstPropertyKey].agency;
        const informationVehicles = agency[firstPropertyKey].information_vehicles;

        return (
            agencyData.entity.type === 'Legal entity' &&
            agencyData.entity.subtype === 'Transport Agency' &&
            informationVehicles &&
            informationVehicles.some((vehicleInfo) => Object.keys(vehicleInfo)[0] === String(dniToSearch))
        );
    });
    
    console.log(filteredAgency);

    return (
        <div>
            {filteredAgency && (
                <div key={Object.keys(filteredAgency)[0]}>
                    <div className="container-left" style={{ marginBottom: '50px '}}>
                        <div className="rectangle-container-top">
                            <div className="rectangule-left-top"> NIT </div>
                            <div className="rectangule-right-top">{filteredAgency[Object.keys(filteredAgency)[0]].agency.nit}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left"> BUSINESS NAME </div>
                            <div className="rectangule-right">{filteredAgency[Object.keys(filteredAgency)[0]].agency.business_name}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left"> ADDRESS </div>
                            <div className="rectangule-right">{filteredAgency[Object.keys(filteredAgency)[0]].agency.address.street}, {filteredAgency[Object.keys(filteredAgency)[0]].agency.address.number}, {filteredAgency[Object.keys(filteredAgency)[0]].agency.address.apartment}</div>
                        </div>
                        <div className="rectangle-container-bottom">
                            <div className="rectangule-left-bottom"> CONTACT </div>
                            <div className="rectangule-right-bottom">{filteredAgency[Object.keys(filteredAgency)[0]].agency.contact}</div>
                        </div>
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
            )}
        </div>
    );
}
