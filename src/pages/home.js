import React, { useState } from 'react';
import './style-pages02.css';


export default function Home() {
    const [value] = useState(0);

    return (
    <div>
        <CustomTabPanel value={value} index={0}>
            <div className="container-left2" style={{ marginTop: '20px '}}>
                <center>
                <img
                        src="https://oncenoticias.digital/wp-content/uploads/2022/01/COVID19.jpg"
                        alt="Agencias"
                        className="agencias-image2"
                    />
                
                <div className="cuadro2"> Health Agency </div>
                
                
                    <p>The health agency is characterized because it records data from citizen medical records.</p>
                
                </center>
            </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={0}>
            <div className="container-left2" style={{ marginTop: '10px '}}>
                <center>
                <img
                        src="https://educacionbogota.edu.co/portal_institucional/sites/default/files/2020-05/transformacion-peq1.jpg"
                        alt="Agencias"
                        className="agencias-image2"
                    />
                
                <div className="cuadro2"> Education Agency </div>
                
                
                    <p>The education agency is characterized because it keeps the data of those citizens who continue their studies or in whose case they have already finished.</p>
                
                </center>
            </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={0}>
            <div className="container-left22" style={{ marginTop: '-80px '}}>
                <center>
                <img
                        src="https://grupotierradentro.com/wp-content/uploads/2021/05/9260-768x576.jpeg"
                        alt="Agencias"
                        className="agencias-image2"
                    />
                
                <div className="cuadro2"> Transpor Agency </div>
                
                 
                    <p>The transportation agency is characterized because it registers citizens who use various types of transportation, be it plane, bus, taxi, etc...</p>
                
                </center>
            </div>
        </CustomTabPanel>

        <CustomTabPanel value={value} index={0}>
            <div className="container-left22" style={{ marginTop: '-22px '}}>
                <center>
                <img
                        src="https://media.slidesgo.com/storage/40601238/conversions/0-legal-services-agency-thumb.jpg"
                        alt="Agencias"
                        className="agencias-image2"
                    />
                
                <div className="cuadro2"> Legal Agency </div>
                
                
                    <p>The health agency is characterized because it records data from citizen medical records.</p>
            
                </center>
            </div>
        </CustomTabPanel>
        
        
        
    </div>
    );
}

function CustomTabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}



