import { useEffect, useState } from 'react';
import './styles-components.css';

export default function LegalAgencyComponent () {
    const [legalAgencies, setLegalAgencies] = useState([]);
    const [dniLogin , setDniLogin] = useState(localStorage.getItem("dniLogin")  ? localStorage.getItem("dniLogin")  : ''); 

    useEffect(() => {
        const fetchLegalAgencies = async () => {
            try {
                const response = await fetch('https://api-goverment-agency.onrender.com/agencies/legal-agencies', {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTgiLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3VidHlwZSI6IkxlZ2FsIEFnZW5jeSIsImtleSI6IiQyYiQxMiR0YTQ3UzlDR2RFQUJKeHVKamVrd1JPL2pXTTAxcEFtNGxSTEpNOWFMcXdUWGo5QVRGcnhwVyIsImV4cCI6MTczMjQ4MTkyOX0.npIV38mr41r_fFwi4VThBebnzapG_So9P3YYGVANnLQ',
                    },
                });
                const data = await response.json();
                console.log(data);

                const legalAgenciesArray = Array.isArray(data['Legal Agencies']) ? data['Legal Agencies'] : [];
                setLegalAgencies(legalAgenciesArray);
            } catch (error) {
                console.error('Error fetching legal agencies:', error);
            }
        };
        
        fetchLegalAgencies();
    }, []);
    
    const dniToSearch = dniLogin;

    const filteredAgency = legalAgencies.find((agency) => {
        const firstPropertyKey = Object.keys(agency)[0];
        const agencyData = agency[firstPropertyKey].agency;
        const caseHistories = agency[firstPropertyKey].case_histories;

        return (
            agencyData.entity.type === 'Legal entity' &&
            agencyData.entity.subtype === 'Legal Agency' &&
            caseHistories &&
            caseHistories.some((legalInfo) => Object.keys(legalInfo)[0] === String(dniToSearch))
        );
    });
    
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
                            src="https://img.freepik.com/fotos-premium/martillo-juez-abogados-justicia-que-tienen-reunion-equipo-bufete-abogados-conceptos-derecho-servicios-legales_265022-21654.jpg?w=360"
                            alt="Legal"
                            className="legal-image"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
