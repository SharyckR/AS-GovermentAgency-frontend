
import './styles-pages.css';
import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';
import { Button, TextField } from '@mui/material';
import { RegisterLink } from '../components/link_pages';

function LogoAndName() {
    return (
        <div className="header-logo">
            <img src={Logo1} alt="logo página" />
            <img src={Logo2} alt="logo página" />
        </div>
    );
}

export default function Entry() {
    
    return (
        <div className="black-rectangle">
            <div className="grey-rectangle">
                <LogoAndName />
                <div className="white-rectangle">
                    <div className="rectangle-entry-top">Login</div>
                    <div className="rectangule-center">
                        <TextField id="standard-basic" label="DNI or E-mail" variant="standard" />
                    </div>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'black', color: 'white'}}
                    >
                        Send Token
                    </Button>
                    <div className="separator"></div>
                    <div className="rectangle-question">Are you new ?</div>
                    <div className="rectangle-entry-bottom"><RegisterLink /></div>
                </div>
            </div>

        </div>
    );
}
