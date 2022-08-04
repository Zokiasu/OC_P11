import React, { useEffect, useState } from 'react'; 
import { useParams } from 'react-router-dom'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import Carousel from '../components/Carousel';
import Tag from '../components/Tag';
import Ranking from '../components/Ranking';

const House = () => {
	const params = useParams()
	const houseId = params.id

	const [house, setHouse] = useState([]);
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	
	
	useEffect(() => {
		const fetchData = () => {
			fetch('../data/data.json')
				.then(res => res.json())
				.then((result) => {
					const currentHouse = result.find(item => item.id === houseId)
					setHouse(currentHouse)
					setIsLoaded(true)
				}, (error) => {
					setIsLoaded(true)
					setError(error)
				});
		}
		fetchData()
	}, [houseId])
	
	return error ? <p>Erreur : {error.message}</p>
    : !isLoaded ? <p>Loading...</p>
    : (
		<div>
			<Header/>
			<div className='house container'>
				<Carousel items={house.pictures} />
				<div className='house-body'>
					<div className='house-body__info'>
						<div className='info-left'>
							<h1>{house.title}</h1>
							<h2>{house.location}</h2>
							<div className='tags'>
								{house.tags.map((tag, index) => (
									<Tag key={tag + '_' + index} tag={tag}/>
								))}
							</div>
						</div>
						<div className='info-right'>
							<div className='info-profile'>
								<p>{house.host.name}</p>
								<img src={house.host.picture} alt={"Profile " + house.host.name} />
							</div>
							<Ranking rating={house.rating}/>
						</div>
					</div>
					<div className='house-body__feat'>
						<Collapse 
							title='Description'
							text={house.description}
							isOpen={true}
						/>
						<Collapse 
							title='Équipements'
							list={house.equipments}
							isOpen={true}
						/>
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default House;