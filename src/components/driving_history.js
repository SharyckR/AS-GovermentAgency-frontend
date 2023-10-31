
import './styles-components.css';

export default function DrivingHistoryComponent() {

    return (
        <div>
            <div className="container-left" style={{ marginTop: '40px '}}>
                    <div className="rectangle-container-top">
                        <div className="rectangule-left-top"> ACCIDENT HISTORY </div>
                        <div className="rectangule-right-top"> Number of Previous Accidents </div>
                    </div>
                    <div className="rectangle-container">
                        <div className="rectangule-left"> CLAIMS HISTORY </div>
                        <div className="rectangule-right"> Number of Previous Claims </div>
                    </div>
                    <div className="rectangle-container-bottom">
                        <div className="rectangule-left-bottom"> TRAFFIC VIOLATIONS </div>
                        <div className="rectangule-right-bottom"> Number of Traffic Violations </div>
                    </div>
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
