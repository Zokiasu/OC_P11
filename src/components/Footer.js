import React from 'react';

import { ReactComponent as Logo } from '../assets/img/logo-min.svg'

const Footer = () => {
	return (
		<div className='footer'>
			<Logo className='footer__logo'/>
			<p>© 2020 Kasa. All right reserved</p>
		</div>
	);
};

export default Footer;