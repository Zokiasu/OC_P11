import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

const error404 = () => {
	return (
		<div>
			<Header/>
			<div className="error404 container">
				<div>
					<h2 className='title'>404</h2>
					<h3 className='subtitle'>Oups! La page que vous demandez n'existe pas.</h3>
				</div>
				<NavLink to="/" className="link">
					<p>Retourner sur la page d’accueil</p>
				</NavLink>
			</div>
			<Footer/>
		</div>
	);
};

export default error404;