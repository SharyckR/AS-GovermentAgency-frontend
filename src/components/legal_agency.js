
import './styles-components.css';

export default function LegalAgencyComponent() {
    return (
        <div>
            <div className="container-left" style={{ marginTop: '40px '}}>
                <div className="rectangle-container-top">
                    <div className="rectangule-left-top"> NIT </div>
                    <div className="rectangule-right-top"> NIT Agency </div>
                </div>
                <div className="rectangle-container">
                    <div className="rectangule-left"> BUSINESS NAME </div>
                    <div className="rectangule-right"> Name of Agency </div>
                </div>
                <div className="rectangle-container">
                    <div className="rectangule-left"> CONTACT </div>
                    <div className="rectangule-right"> E-Mail or Phone Number </div>
                </div>
                <div className="rectangle-container">
                    <div className="rectangule-left"> ADDRESS </div>
                    <div className="rectangule-right"> Address </div>
                </div>
                <div className="rectangle-container-bottom">
                    <div className="rectangule-left-bottom"> CONTACT </div>
                    <div className="rectangule-right-bottom"> E-Mail or Phone Number </div>
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
        
    );
}
