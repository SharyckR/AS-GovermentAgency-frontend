
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './styles-pages.css';

export default function Support() {
    return (
        <div>
            <div className="root">
                <div className='container'>
                    <div className="container-top-3" > Welcome to Client Support </div>
                    <div className="container-top-3" > Do you have a problem ? </div>
                    <div className="rectangle-container-2" >
                        <div className="rectangule-left-2"> FULL NAME </div>
                        <div className="rectangule-right-2"> Full Name </div>
                    </div>
                    <div className="rectangle-container-2" >
                        <div className="rectangule-left-2"> DNI </div>
                        <div className="rectangule-right-2"> DNI of Person</div>
                    </div>
                    <div className="rectangle-container-2" >
                        <div className="rectangule-left-2"> CONTACT </div>
                        <div className="rectangule-right-2"> Phone Number or E-Mail </div>
                    </div>
                    <TextField
                    id="outlined-multiline-static"
                    label="Describe the problem."
                    multiline
                    rows={4}
                    defaultValue="Describe the problem."
                    fullWidth
                    style={{ marginTop: '20px' }}
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', marginLeft: '270px' }}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}