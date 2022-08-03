import { React, useState } from 'react';

import { ReactComponent as IconArrowLeft } from '../assets/icons/arrow-left.svg'
import { ReactComponent as IconArrowRight } from '../assets/icons/arrow-right.svg'

const Carousel = (props) => {

	const [currentIndex, setCurrentIndex] = useState({index: 1});

	const next = () => {
		if (currentIndex.index === props.items.length) {
			setCurrentIndex({index: 1});
		}
		else {
			setCurrentIndex({index: currentIndex.index + 1});
		}
	}

	const prev = () => {
		if (currentIndex.index === 1) {
			setCurrentIndex({index: props.items.length});
		}
		else {
			setCurrentIndex({index: currentIndex.index - 1});
		}
	}

	if(props.items.length >1) {
		return (
			<div className="carousel" aria-label="carousel">
				<div className="medias">
					{props.items.map((image, index) => {
						return (
							<img 
                aria-hidden={currentIndex.index === index +1 ? "false" : "true"}
								key={index} 
								src={image} 
								alt={image} 
								className="medias-item"
							/>
						)})
					}
				</div>

				<div className="carousel-nav">
					<button className="carousel-nav__button__right" onClick={prev}>
						<IconArrowLeft />
					</button>
					<button className="carousel-nav__button__left" onClick={next}>
						<IconArrowRight />
					</button>
				</div>

				<span className="currentImgCount" tabIndex="0">{`${currentIndex.index} / ${props.items.length}`}</span>
			</div>
		);
	} else {
		return (
			<div className="carousel">
				<div className="medias">
					{props.items.map((image, index) => {
						return (
							<img 
								key={index} 
								src={image} 
								alt={image} 
								className="medias-item"
							/>
						)})
					}
				</div>
			</div>
		);
	}
};

export default Carousel;