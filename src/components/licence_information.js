
import './styles-components.css';

export default function LicenceInformationComponent() {

    return (
        <div>
            <div className="container-left" style={{ marginTop: '20px '}}>
                    <div className="rectangle-container-top">
                        <div className="rectangule-left-top"> DRIVER's LICENCE NUMBER </div>
                        <div className="rectangule-right-top"> Driver's Licence Number </div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left"> LICENCE EXPEDITION DATE </div>
                        <div className="rectangule-right"> Licence Expedition Date </div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left"> LICENCE EXPIRATION DATE </div>
                        <div className="rectangule-right"> Licence Expiration Date </div>
                    </div>
                    <div className="rectangle-container-bottom">
                        <div className="rectangule-left-bottom"> CONTACT </div>
                        <div className="rectangule-right-bottom"> Diver's Contact </div>
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
