import { useState } from 'react';
import './styles-components.css';
import { BasicInformationLink, LegalInformationLink, EducationalInformationLink, HealthInformationLink, TransportInformationLink } from './link_pages';
import { Menu, MenuItem, Button, Icon } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function DropdownMenu() {
    const [ setSelectedValue ] = useState('');
    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (value) => {
        setSelectedValue(value);
        handleClose();
    };

    return (
        <div>
            <Button
                id="basic-button"
                style={{ color: 'black' }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <span className="heading-words">
                    Data<Icon> <VisibilityIcon fontSize="medium" /></Icon>
                </span>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => handleMenuItemClick('basic')}><BasicInformationLink /></MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('legal')}><LegalInformationLink /></MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('transport')}><TransportInformationLink /></MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('health')}><HealthInformationLink /></MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('educational')}><EducationalInformationLink /></MenuItem>
            </Menu>
        </div>
    );
}
