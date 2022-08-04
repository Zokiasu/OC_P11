import React, { useEffect, useState } from 'react'; 

import { ReactComponent as StarIcon } from '../assets/icons/star.svg'

const Ranking = ({ rating }) => {

	//en fonction du nombre de rating affiche le nombre d'étoile en rouge et le reste en blanc

	const stars = () => {
		let stars = []
		for (let i = 0; i < rating; i++) {
			stars.push(<StarIcon key={i} className='star'/>)
		}
		for (let i = 0; i < (5 - rating); i++) {
			stars.push(<StarIcon key={i} className='star star-empty'/>)
		}
		return stars
	}

	return (
		<div className='ranking'>
			<div className='ranking__stars'>
				{stars()}
			</div>
		</div>
	);
};

export default Ranking;