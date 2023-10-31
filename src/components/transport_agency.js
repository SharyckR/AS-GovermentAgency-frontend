
import './styles-components.css';

export default function TransportAgencyComponent() {
    return (
        <div>
            <div className="container-left" style={{ marginBottom: '50px '}}>
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
                    src="http://cpbroker.com.co/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-13-at-1.01.57-PM.jpeg"
                    alt="Transport"
                    className="transport-agency-image"
                    style={{ width: '600px', height: '300px' }}
                />
            </div>
        </div>
        
    );
}
