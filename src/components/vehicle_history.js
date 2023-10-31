
import './styles-components.css';

export default function VehicleHistoryComponent() {

    return (
        <div>
            <div className="container-right-2" style={{ marginTop: '40px '}}>
                <div className="container-top-2" > Owner's Name </div>
                <div className="rectangle-container-top" >
                    <div className="rectangule-left-top"> VIN </div>
                    <div className="rectangule-right-top"> Vehicle Identification Number </div>
                </div>
                <div className="rectangle-container" >
                    <div className="rectangule-left"> BRAND </div>
                    <div className="rectangule-right"> Brand of Vehicle </div>
                </div>
                <div className="rectangle-container" >
                    <div className="rectangule-left"> MODEL </div>
                    <div className="rectangule-right"> Model of Vehicle </div>
                </div>
                <div className="rectangle-container" >
                    <div className="rectangule-left"> INSURANCE YEAR </div>
                    <div className="rectangule-right"> Insurance Year of Vehicle </div>
                </div>
                <div className="rectangle-container-bottom" >
                    <div className="rectangule-left-bottom"> PLATE </div>
                    <div className="rectangule-right-bottom"> Plate of Vehicle </div>
                </div>
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