import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () =>
	<Link to="/" style={{height: '50px', position: 'fixed', top: '0', left: '0', zIndex:'3', background: 'blue', color: 'white', width: '100%'}}>
		Home
		</Link>

export default Navbar;