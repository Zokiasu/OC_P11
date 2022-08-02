import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<ul>
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>Acceuil</li>
				</NavLink>
				<NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>A propos</li>
				</NavLink>
				<NavLink to="/sdfsqfdq" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>404</li>
				</NavLink>
				<NavLink to="/house/:id" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>House</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navigation;