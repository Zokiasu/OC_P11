import React from 'react';
import { useState } from 'react'

import { ReactComponent as IconArrowDown } from '../assets/icons/arrow-down.svg'

const Collapse = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	}

	return (
		<div>
			<button
				className="collapse-button"
				onClick={toggle}
			>
				{props.title}

				<IconArrowDown 
					className={`collapse-button__icon ${isOpen ? 'collapse-button__icon--open' : ''}`}
				/>
			</button>

			<div
				className={`collapse-content ${isOpen ? 'collapse-content--open' : ''}`}
			>
				{props.list &&
          <ul>
            {props.list.map(item => <li key={item.toString()}>{item}</li>)}
          </ul>
				}
					
        {props.text && 
          <p>{props.text}</p>
				}
			</div>
		</div>
	);
};

export default Collapse;