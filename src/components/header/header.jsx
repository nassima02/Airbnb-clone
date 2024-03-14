import React from 'react';
import Navbar from "./header-childs/top-header/nav-bar";
import Logo from "./header-childs/top-header/logo";
import Admin from "./header-childs/top-header/admin-section";
import {Box} from "@mui/material";

function Header() {
	return (
		<Box position="static" style={{ display: 'flex', alignItems: 'center', background: 'white', color:'black', justifyContent:'space-between'}}>
			{/* Le logo */}
			<Logo/>
			{/* la barre de navigation */}
			<Navbar />
			{/* la barre d'admin */}
			<Admin/>
		</Box>
	);
}

export default Header;
