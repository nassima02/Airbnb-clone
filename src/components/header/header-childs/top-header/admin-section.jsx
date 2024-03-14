
import React from "react";
import LanguageIcon  from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import {Box} from "@mui/material";
import './../../../../index.scss';

const AdminSection = () => {
    return(
        <Box className="admin-section">
            <p>Mettre mon logement sur Airbnb</p>
            <LanguageIcon className="admin-section__language" fontSize="small"/>
            <div className="admin-section__button">
                <MenuIcon className="admin-section__button__menu" fontSize="small"/>
                <AccountCircleIcon className="admin-section__button__profil" fontSize="large" />
            </div>
        </Box>
    )
}

export default AdminSection
