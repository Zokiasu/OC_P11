import React from 'react';

const Thumb = ({ title, cover }) => {
	return (
		<div 
			className='thumb'
			style={{ backgroundImage: `url(${cover})` }}
		>
			<div className='title-container'>
				<p className='title'>
					{title}
				</p>
			</div>
		</div>
	);
};

export default Thumb;