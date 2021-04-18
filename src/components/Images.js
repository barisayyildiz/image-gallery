import React, {useContext} from 'react'

import '../styles/Images.scss';

import { ImageContext } from '../App';

function Images() {

	// get images from context
	const {images, setImages} = useContext(ImageContext);

	return (
		
		<div className="masonry">
			{
				images ?
				images.map(item => {
					return(
						<div className="brick">
							<a href={item.link} target="_blank">
								<img src={item.source}></img>
							</a>
						</div>
					)
				}) : null
			}

		</div>

	)
}

export default Images
