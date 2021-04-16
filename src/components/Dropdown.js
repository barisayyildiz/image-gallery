import React, { useState } from 'react'

import '../styles/Dropdown.scss';

function Dropdown(props) {

	const [open, setOpen] = useState(false);
	const {collectionName, setCollection} = props.value;
	return (
		<>
			<div className="dropdown" onClick={() => setOpen(!open)}>
				
				<span>{collectionName ? collectionName : 'Collections'}</span>
			
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
