import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import './styles-pages.css';
import emailjs from 'emailjs-com';

export default function Support() {
    const [fullName, setFullName] = useState('');
    const [dni, setDNI] = useState('');
    const [contact, setContact] = useState('');
    const [problemDescription, setProblemDescription] = useState('');

    function sendEmail(e) {
        e.preventDefault();

        const formData = {
            fullName: fullName,
            dni: dni,
            contact: contact,
            problemDescription: problemDescription,
        };

        emailjs.send('service_0uojlz4','template_97if5im',formData,'KciX8Jb8ENs_l15OQ').then(
            (res) => {
                alert('Mensaje enviado correctamente.');
                console.log(res);
            },
            (error) => {
                alert('Error al enviar el mensaje.');
                console.error(error);
            }
        )
    };

    return (
        <div>
            <div className="root-grey">
                <div className="container-grey">
                    <div className="container-top-3" > Welcome to Client Support </div>
                    <div className="container-top-3" > Do you have a problem ? </div>
                    <div className="rectangle-container-2" >
                        <div className="rectangule-left-2"> FULL NAME </div>
                        <div className="rectangule-right-2"> 
                            <TextField
                                    id="standard-basic"
                                    label="Full Name"
                                    variant="standard"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="rectangle-container-2" >
                        <div className="rectangule-left-2"> DNI </div>
                        <div className="rectangule-right-2"> 
                        <TextField
                                    id="standard-basic"
                                    label="DNI"
                                    variant="standard"
                                    value={dni}
                                    onChange={(e) => setDNI(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="rectangle-container-2" >
                        <div className="rectangule-left-2"> CONTACT </div>
                        <div className="rectangule-right-2"> 
                            <TextField
                                    id="standard-basic"
                                    label="Phone Number or E-Mail"
                                    variant="standard"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                            />
                        </div>
                    </div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Describe the problem."
                        multiline
                        rows={4}
                        value={problemDescription}
                        onChange={(e) => setProblemDescription(e.target.value)}
                        fullWidth
                        style={{ marginTop: '20px' }}
                    />
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        style={{ backgroundColor: 'black', color: 'white', marginTop: '20px', marginLeft: '270px' }}
                        onClick={sendEmail}
                    >
                        Send
                    </Button>
                </div>
            </div>
        </div>
    );
}