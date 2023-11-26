import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
    return (
        <div>
            <div>
                <Card sx={{ maxWidth: 800, marginLeft: '350px', marginTop: '20px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#a9a9a9' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div">
                            Access your information anytime, anywhere
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            This web application allows you to view and save your general information, whether medical records, 
                            tax records, among others. Our authentication system allows only you to access your information along 
                            with those agencies to which you allow access.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="basic information"
                        height="500"
                        image="https://static.vecteezy.com/system/resources/previews/005/428/865/non_2x/a-document-and-a-closed-lock-digital-signature-icon-vector.jpg"
                    />
                </Card>

            </div>
            
            <div style={{ display: 'flex', minHeight: '50vh', marginBottom: '20px', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 345, marginRight: '10px' }}>
                    <CardMedia
                        component="img"
                        alt="basic information"
                        height="200"
                        image="https://www.idaip.org.mx/images/iconos/que%20es%20PDP.png"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Basic Information
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Access and protect your general information in a single web application.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" disabled>
                            To see your general information, enter the Data menu.
                        </Button>
                    </CardActions>
                </Card>
                
                <Card sx={{ maxWidth: 345, marginRight: '10px' }}>
                    <CardMedia
                        component="img"
                        alt="health information"
                        height="200"
                        image="https://oncenoticias.digital/wp-content/uploads/2022/01/COVID19.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Health Information
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Access your health information such as your medical history in a single web application. 
                            Those health agencies to which you provide permission will be able to view and update this information.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" disabled>
                            To see your health information, enter the Data menu.
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 345, marginRight: '10px' }}>
                    <CardMedia
                        component="img"
                        alt="educational information"
                        height="200"
                        image="https://educacionbogota.edu.co/portal_institucional/sites/default/files/2020-05/transformacion-peq1.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Educational Information
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Access your education information such as your primary and secondary education, among others 
                            in a single web application. Those education agencies to which you provide permission will 
                            be able to view and update this information.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" disabled>
                            To see your education information, go to the Data menu.
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div style={{ display: 'flex', minHeight: '50vh', marginBottom: '20px', justifyContent: 'center' }}>
                <Card sx={{ maxWidth: 345, marginRight: '10px' }}>
                    <CardMedia
                        component="img"
                        alt="transport information"
                        height="200"
                        image="https://grupotierradentro.com/wp-content/uploads/2021/05/9260-768x576.jpeg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Transport Information
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Access your transportation-related information such as your vehicle purchase history and 
                            fine history in a single web application. Those transportation agencies to which you 
                            provide permission will be able to view and update this information.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" disabled>
                            To see your transportation information, enter the Data menu.
                        </Button>
                    </CardActions>
                </Card>

                <Card sx={{ maxWidth: 300, marginRight: '10px' }}>
                    <CardMedia
                        component="img"
                        alt="legal information"
                        height="200"
                        image="https://media.slidesgo.com/storage/40601238/conversions/0-legal-services-agency-thumb.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Legal Information
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Access your tax information information such as your legal case history in a single web application. 
                            Those legal agencies to which you provide permission will be able to view and update this information.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" disabled>
                            To see your tax information, enter the Data menu.
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
