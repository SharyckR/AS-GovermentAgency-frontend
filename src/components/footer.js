import { AppBar, Toolbar, Container, Box, Divider, Icon } from '@mui/material';
import { SupportLink, AboutUsLink, EntryLink } from './link_pages';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import './styles-components.css';


export default function FooterApp() {
    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }} sx={{ height: '60px' }} >
            <Toolbar variant="dense"> 
                <Container>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ height: '60px' }}>  
                        <SupportLink />
                        <Icon> <ContactSupportIcon fontSize="medium" /> </Icon>
                    </Box>
                </Container>
            
                <Divider orientation="vertical" flexItem style={{ background: 'white' }} />

                <Container>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center"> 
                        <AboutUsLink />
                        <Icon> <InfoIcon fontSize="medium" /> </Icon>
                    </Box>
                </Container>

                <Divider orientation="vertical" flexItem style={{ background: 'white' }} />

                <Container>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <EntryLink />
                        <Icon> <LoginIcon fontSize="medium" /> </Icon>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
