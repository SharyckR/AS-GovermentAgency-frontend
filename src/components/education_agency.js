import { useEffect, useState } from 'react';
import './styles-components.css';

export default function EducationAgencyComponent() {
    const [educationalAgencies, setEducationalAgencies] = useState([]);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchEducationalAgencies = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/educational-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI0NTc1NTE0NSIsInR5cGUiOiJMZWdhbCBFbnRpdHkiLCJzdWJ0eXBlIjoiRWR1Y2F0aW9uYWwgQWdlbmN5Iiwia2V5IjoiJDJiJDEyJGZOZU9JV2hwQVlZTEVKZWRHYUhkSmVmU3RmeXlMemJoVGpINkd3NXdIL1FOcTRKQWJxVTJLIiwiZXhwIjoxNzMxODA3ODE1fQ.NwJN5d38Y5VP9lGLA6I2OuEJXm4aWH_zEeh34DKr2RM',
                    },
                });
                const data = await response.json();
                console.log(data);

                const educationalAgenciesArray = Array.isArray(data['Educational Agencies']) ? data['Educational Agencies'] : [];
                setEducationalAgencies(educationalAgenciesArray);
            } catch (error) {
                console.error('Error fetching educational agencies:', error);
            }
        };
        
        fetchEducationalAgencies();
    }, []);
    
    const dniToSearch = dniLogin;

    const filteredAgency = educationalAgencies.find((agency) => {
        const firstPropertyKey = Object.keys(agency)[0];
        const agencyData = agency[firstPropertyKey].agency;
        const educationHistories = agency[firstPropertyKey].education_histories;

        return (
            agencyData.entity.type === 'Legal entity' &&
            agencyData.entity.subtype === 'Educational Agency' &&
            educationHistories &&
            educationHistories.some((educationalInfo) => Object.keys(educationalInfo)[0] === String(dniToSearch))
        );
    });

    return (
        <div>
            {filteredAgency && (
                <div key={Object.keys(filteredAgency)[0]}>
                    <div className="container-left" style={{ marginBottom: '50px '}}>
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
                </div>
            )}
        </div>
    );
}
