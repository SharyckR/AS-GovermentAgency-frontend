import { Avatar } from '@mui/material';
import './styles-pages.css';
import '../components/styles-components.css';
import Developer1 from '../images/developer1.jpg';
import Developer2 from '../images/developer2.jpg';
import Developer3 from '../images/developer3.jpg';

export default function AboutUs() {
    return (
        <div>
            <div className='container-information'>
                <div className='container-top'>
                    <h1>About us</h1>
                </div>
                <div className='container-bottom'>
                    <p> We are a government agency that encompasses 
                        various agencies,  such as: health agencies, 
                        security agencies, transportation agencies and 
                        the country's education agencies. 
                        Our main objective is to save and provide 
                        information from the agencies where you are 
                        as a citizen and keep your information safe 
                        with our authentication system, so that you 
                        do not worry about data manipulation without 
                        your consent.
                    </p>
                </div>
            </div>

            <div className='container-right-2'>
                <img
                            src="https://static.vecteezy.com/system/resources/previews/002/254/587/non_2x/governmental-institutions-concept-icon-vector.jpg"
                            alt="goverment"
                            className="container-image"
                            style={{ width: '2000px', height: '500px' }}
                        />
            </div>

            <div className="developers-container">
                <div className="developer">
                    <Avatar alt="developer 1" src={Developer1} sx={{ width: 150, height: 150 }} />
                    <p className='information-developer'>Sharyck Sofía Rodríguez Puello. Student of sixth (6) semester at the Universidad Tecnologia de Bolívar 
                        in the Faculty of Engineering, pursuing a degree in Systems and Computer Engineering. Contact: shrodriguez@utb.edu.co
                    </p>
                </div>
                <div className="developer">
                    <Avatar alt="developer 2" src={Developer2} sx={{ width: 150, height: 150 }} />
                    <p className='information-developer'>Juan Alejandro Moreno Santos. Student of sixth (6) semester at the Universidad Tecnologia de Bolívar 
                        in the Faculty of Engineering, pursuing a degree in Systems and Computer Engineering. Contact: juamoreno@utb.edu.co
                    </p>
                </div>
                <div className="developer">
                    <Avatar alt="developer 3" src={Developer3} sx={{ width: 150, height: 150 }} />
                    <p className='information-developer'>David Andrés Carrero Tinoco. Student of sixth (6) semester at the Universidad Tecnologia de Bolívar 
                        in the Faculty of Engineering, pursuing a degree in Systems and Computer Engineering. Contact: dcarrero@utb.edu.co
                    </p>
                </div>
            </div>
            
        </div>
    );
}