
import './styles-pages.css';
import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';
import { Button, TextField } from '@mui/material';

function LogoAndName() {
    return (
        <div className="header-logo">
            <img src={Logo1} alt="logo página" />
            <img src={Logo2} alt="logo página" />
        </div>
    );
}

export default function Register() {
    
    return (
        <div className="black-rectangle">
            <div className="grey-rectangle">
                <LogoAndName />
                <div className="white-rectangle">
                    <div className="rectangle-entry-top">Register</div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField id="standard-basic" label="DNI or E-mail" variant="standard" />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField id="standard-basic" label="Contact" variant="standard" />
                        </div>
                    </div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField id="standard-basic" label="Name" variant="standard" />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField id="standard-basic" label="Last Name" variant="standard" />
                        </div>
                    </div>
                    <div className="rectangle-container-entry">
                    <div className="rectangule-entry-left">
                            <TextField id="standard-basic" label="Address" variant="standard" />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField id="standard-basic" label="Birthday" variant="standard" />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'black', color: 'white'}}
                    >
                        Register
                    </Button>
                </div>
            </div>

        </div>
    );
}
