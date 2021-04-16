import React, { useState } from 'react'

import '../styles/Dropdown.scss';

function Dropdown(props) {

	const [open, setOpen] = useState(false);
	const {collectionName, setCollection} = props.value;
	return (
		<>
			<div className="dropdown" onClick={() => setOpen(!open)}>
				
				<span>{collectionName ? collectionName : 'Collections'}</span>

				<svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5.744 6.17159C5.34666 6.61401 4.65334 6.61401 4.256 6.17159L0.436019 1.91818C-0.142142 1.27442 0.314743 0.249999 1.18002 0.249999L8.81999 0.25C9.68526 0.25 10.1421 1.27442 9.56398 1.91818L5.744 6.17159Z" fill="#050417"/>
				</svg>
			
				{open &&
					<div className="options">
						<ul>
							<li className="Featured" onClick={e => setCollection("Featured")}>
								<span>Featured</span>
							</li>
							<li className="Wallpapers" onClick={e => setCollection("Wallpapers")}>
								<span>Wallpapers</span>
							</li>
							<li className="Nature" onClick={e => setCollection("Nature")}>
								<span>Nature</span>
							</li>
							<li className="Textures,Patterns" onClick={e => setCollection("Textures,Patterns")}>
								<span>Textures & Patterns</span>
							</li>
						</ul>
					</div>
				}
			
			</div>
		</>
	)
}

export default Dropdown
