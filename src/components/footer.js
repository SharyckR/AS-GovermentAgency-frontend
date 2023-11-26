// FooterApp.js
import React from 'react';
import { AppBar, Toolbar, Container, Box, Divider, Icon, IconButton } from '@mui/material';
import { SupportLink, AboutUsLink, EntryLink } from './link_pages';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import InfoIcon from '@mui/icons-material/Info';
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from '../AuthContext';

export default function FooterApp() {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    if (isAuthenticated) {
      logout();
      localStorage.removeItem("dniLogin");
      alert('Salida Exitosa');
    }
  };

  return (
    <AppBar style={{ backgroundColor: 'black', position: 'sticky', top: 'auto', bottom: 0 }} sx={{ height: '60px' }}>
      <Toolbar variant="dense" style={{ flexGrow: 1 }}>
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
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" sx={{ height: '60px' }}>
            <IconButton color="inherit" onClick={handleLogout}>
              {isAuthenticated ? (
                <React.Fragment>
                  <LoginIcon fontSize="medium" />
                  <span style={{ marginLeft: '5px' }}>Log out</span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <LoginIcon fontSize="medium" />
                  <span style={{ marginLeft: '5px' }}><EntryLink/></span>
                </React.Fragment>
              )}
            </IconButton>
          </Box>
        </Container>
    </Toolbar>
    </AppBar>
  );
}
