import { useEffect, useState } from 'react';
import './styles-components.css';

export default function HealthAgencyComponent() {
    const [healthAgencies, setHealthAgencies] = useState([]);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchHealthhAgencies = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/health-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNjkiLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IkhlYWx0aCBBZ2VuY3kiLCJrZXkiOiIkMmIkMTIkQzhEa0lLZ1hvbUkuUk5mUUQ3RGp1LmdLL2ZIQUxWdC5icTVweGovRTBURGZOMWRDMDdmeXUiLCJleHAiOjE3MzI0ODMwMzh9.UEaObTytb9TLL3QrpE_sTSQnBDaevd1wonpzw25TBP8',
                    },
                });
                const data = await response.json();
                console.log(data);
                
                const healthAgenciesArray = Array.isArray(data['Health Agencies']) ? data['Health Agencies'] : [];
                setHealthAgencies(healthAgenciesArray);
            } catch (error){
                console.error('Error fetching health agencies', error);
            }
        }

        fetchHealthhAgencies();
    }, []);

    const dniToSearch = dniLogin;

    const filteredAgency = healthAgencies.find((agency) => {
        const firstPropertyKey = Object.keys(agency)[0];
        const agencyData = agency[firstPropertyKey].agency;
        const medicalHistories = agency[firstPropertyKey].medical_histories;

        return (
            agencyData.entity.type === 'Legal entity' &&
            agencyData.entity.subtype === 'Health Agency' &&
            medicalHistories &&
            medicalHistories.some((medicalHistory) => Object.keys(medicalHistory)[0] === String(dniToSearch))
        );
    });

    console.log(filteredAgency);
    
    return (
        <div>
            {filteredAgency && (
                <div key={Object.keys(filteredAgency)[0]}>
                    <div className="container-left" style={{ marginTop: '40px '}}>
                        <div className="rectangle-container-top">
                            <div className="rectangule-left-top"> BUSINESS NAME </div>
                            <div className="rectangule-right-top">{filteredAgency[Object.keys(filteredAgency)[0]].agency.business_name}</div>
                        </div>
                        <div className="rectangle-container">
                            <div className="rectangule-left"> NIT </div>
                            <div className="rectangule-right">{filteredAgency[Object.keys(filteredAgency)[0]].agency.nit}</div>
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
                            src="https://oncenoticias.digital/wp-content/uploads/2022/01/COVID19.jpg"
                            alt="Health"
                            className="health-agency-image"
                            style={{ width: '700px', height: '300px' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
