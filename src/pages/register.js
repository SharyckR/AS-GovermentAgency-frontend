import { useState } from 'react';
import './styles-pages.css';
import Logo1 from '../images/logo1.png';
import Logo2 from '../images/logo2.png';
import { Button, TextField } from '@mui/material';

function LogoAndName() {
    return (
        <div className="header-logo-register">
            <img src={Logo1} alt="logo página" />
            <img src={Logo2} alt="logo página" />
        </div>
    );
}

export default function Register() {
    const [formData, setFormData] = useState({
        dni: 0,
        type: '',
        name: '',
        lastName: '',
        birthday: '',
        phone: 0,
        email: '',
        street: '',
        number: 0,
        apartment: '',
        postalCode: '',
        locality: '',
        department: '',
        country: ''
    });

    const handleChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
    };

    const handleRegister = async () => {
        try {
            const requestBody = {
                "user": {
                    "username": String(formData.dni),
                    "type": "Natural Entity",
                    "subtype": "Person",
                    "email": formData.email
                },
                "person": {
                    "type_id_entity": "C.C.",
                    "dni_person": formData.dni,
                    "type": formData.type,
                    "name": formData.name,
                    "last_name": formData.lastName,
                    "birthday": formData.birthday,
                    "phone": formData.phone,
                    "address": {
                        "street": formData.street,
                        "number": formData.number,
                        "apartment": formData.apartment,
                        "postal_code": formData.postalCode,
                        "locality": formData.locality,
                        "department": formData.department,
                        "country": formData.country,
                    }
                },
                "agency": {}
            };

            console.log("Request Body:", requestBody);

            const response = await fetch('https://api-goverment-agency.onrender.com/authentication/register', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNTgiLCJ0eXBlIjoiTGVnYWwgRW50aXR5Iiwic3UzbmV0dHlwZSI6IlBlcnNvbixQZXJzb24iLCJlbWFpbCI6ImxvY2FsYm9AZ21haWwuY29tIiwiaWQiOiIxMjM0NTY3ODkwIiwidHlwZSI6IlBlcnNvbixQZXJzb24iLCJncm91cHMiOiJzdGFmZiJ9.d1b3FLPL04i4bX8YyHtRLU8mV52mVJzLj3oOLXzydkM',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Registro exitoso:', data);
                alert('Su registro ha sido exitoso. Al loguearse en la aplicación debe usar su DNI.');
            } else {
                const errorMessage = await response.text();
                console.error('Error en el registro:', response.status, errorMessage);
            }
        } catch (error) {
            console.error('Error en el registro:', error);
        }
    };

    console.log(formData)

    return (
        <div className="black-rectangle-register">
            <div className="grey-rectangle-register">
                <LogoAndName />
                <div className="white-rectangle-register">
                    <div className="rectangle-entry-top">Register</div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="type"
                                label="Type of DNI"
                                variant="standard"
                                value={formData.type}
                                onChange={handleChange('type')}
                            />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField
                                id="dni"
                                label="DNI"
                                variant="standard"
                                value={formData.dni}
                                onChange={handleChange('dni')}
                            />
                        </div>
                    </div>

                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="name"
                                label="Name"
                                variant="standard"
                                value={formData.name}
                                onChange={handleChange('name')}
                            />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField
                                id="lastName"
                                label="Last Name"
                                variant="standard"
                                value={formData.lastName}
                                onChange={handleChange('lastName')}
                            />
                        </div>
                    </div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="birthday"
                                label="Birthday"
                                variant="standard"
                                value={formData.birthday}
                                onChange={handleChange('birthday')}
                            />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField
                                id="phone"
                                label="Phone"
                                variant="standard"
                                value={formData.phone}
                                onChange={handleChange('phone')}
                            />
                        </div>
                    </div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="email"
                                label="E-Mail"
                                variant="standard"
                                value={formData.email}
                                onChange={handleChange('email')}
                            />
                        </div>
                    </div>

                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            Address
                        </div>
                    </div>

                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="street"
                                label="Street"
                                variant="standard"
                                value={formData.street}
                                onChange={handleChange('street')}
                            />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField
                                id="number"
                                label="Number"
                                variant="standard"
                                value={formData.number}
                                onChange={handleChange('number')}
                            />
                        </div>
                    </div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="apartment"
                                label="Apartment"
                                variant="standard"
                                value={formData.apartment}
                                onChange={handleChange('apartment')}
                            />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField
                                id="postalCode"
                                label="Postal Code"
                                variant="standard"
                                value={formData.postalCode}
                                onChange={handleChange('postalCode')}
                            />
                        </div>
                    </div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="locality"
                                label="Locality"
                                variant="standard"
                                value={formData.locality}
                                onChange={handleChange('locality')}
                            />
                        </div>
                        <div className="rectangule-entry-right">
                            <TextField
                                id="department"
                                label="Department"
                                variant="standard"
                                value={formData.department}
                                onChange={handleChange('department')}
                            />
                        </div>
                    </div>
                    <div className="rectangle-container-entry">
                        <div className="rectangule-entry-left">
                            <TextField
                                id="country"
                                label="Country"
                                variant="standard"
                                value={formData.country}
                                onChange={handleChange('country')}
                            />
                        </div>
                    </div>

                    <Button
                        variant="contained"
                        style={{ backgroundColor: 'black', color: 'white', marginTop: '20px' }}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                </div>
            </div>
        </div>
    );
}
