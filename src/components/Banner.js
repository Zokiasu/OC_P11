import React from 'react';

const Banner = ({image, title}) => {
	return (
		<div className='banner' style={{ backgroundImage: `url(${image})` }}>
			<p className='banner__title'>{title}</p>
		</div>
	);
};

export default Banner;