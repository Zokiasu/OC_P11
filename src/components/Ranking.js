import React from 'react'; 

import { ReactComponent as StarIcon } from '../assets/icons/star.svg'

const Ranking = ({ rating }) => {

	const stars = () => {
		let stars = []
		for (let i = 0; i < rating; i++) {
			stars.push(<StarIcon key={'fullStar_'+i} className='star'/>)
		}
		for (let i = 0; i < (5 - rating); i++) {
			stars.push(<StarIcon key={'emptyStar_'+i} className='star star-empty'/>)
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