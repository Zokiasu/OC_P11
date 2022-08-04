import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Thumb from '../components/Thumb';
import { NavLink } from 'react-router-dom';

import bannerImg from '../assets/img/banner-home.png'

const Home = () => {

	const [data, setData] = useState([]);
    
	useEffect(() => {
		fetch('./data/data.json')
			.then(res => res.json())
			.then((result) => setData(result));
	}, [])

	return (
		<div className='home'>
			<Header/>
			<div className='home-body container'>
				<Banner image={bannerImg} title="Chez vous, partout et ailleurs"/>
				<div className='thumb-list'>
					{data.map(item => (
						<NavLink to={"/house/"+item.id}>
							<Thumb key={item.id} title={item.title} cover={item.cover}/>
						</NavLink>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home;