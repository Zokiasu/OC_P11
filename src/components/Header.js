import React from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../assets/img/logo.svg'

const Header = () => {
	return (
		<div className='header container'>
			<NavLink to="/">
				<Logo className='header__logo'/>
			</NavLink>
			<ul className='header__link'>
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>Acceuil</li>
				</NavLink>
				<NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>A propos</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Header;