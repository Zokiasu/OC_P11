import { React, useState } from 'react';

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
					{props.images.map((image, index) => {
						return (
							<img 
								key={index} 
								src={image} 
								alt={image} 
								className={`media ${currentIndex.index === index + 1 ? 'media--active' : ''}`}
							/>
						)})
					}
				</div>

				<div className="carousel-nav">
					<button className="carousel-nav__button" onClick={prev}>
						<svg className="carousel-nav__icon" viewBox="0 0 24 24">
							<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
						</svg>
					</button>
					<button className="carousel-nav__button" onClick={next}>
						<svg className="carousel-nav__icon" viewBox="0 0 24 24">
							<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
						</svg>
					</button>
				</div>

				<span className="currentImgCount" tabIndex="0">{`${currentIndex.index} / ${props.images.length}`}</span>
			</div>
		);
	} else {
		return (
			<div className="carousel">
				<div className="medias">
					{props.images.map((image, index) => {
						return (
							<img 
								key={index} 
								src={image} 
								alt={image} 
								className={`media ${currentIndex.index === index + 1 ? 'media--active' : ''}`}
							/>
						)})
					}
				</div>
			</div>
		);
	}
};

export default Carousel;