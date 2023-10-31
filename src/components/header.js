import { AppBar, Toolbar, Container, Box, Divider } from '@mui/material';
import './styles-components.css';
import LogoApp from '../images/logo.png';
import { HomeLink } from './link_pages';
import DropdownMenu from './menu';

export function LogoAndName() {
    return (
        <div className="header-container">
            <img src={LogoApp} alt="logo página" className="logo" />
            <div>
                <span>Cutting - Edge</span>
                <br />
                <span>Security Government Agency</span>
            </div>
        </div>
    );
}

export default function HeaderApp() {
    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar variant="dense">
                <Container>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <HomeLink />
                    </Box>
                </Container>
            
                <Divider orientation="vertical" flexItem style={{ background: 'white' }} />

                <Container item>
                    <LogoAndName />
                </Container>

                <Divider orientation="vertical" flexItem style={{ background: 'white' }} />

                <Container item>
                    <Box display="flex" justifyContent="center" alignItems="center" >
                        <DropdownMenu />
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
}
