import React, {useContext} from 'react'

import '../styles/Images.scss';

import { ImageContext } from '../App';

function Images() {

	// get images from context
	const {images, setImages, notFound} = useContext(ImageContext);

	return (
		<>
		<div className="masonry">
			{
				images.length ?
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

		{
			notFound &&
			(
			<div className="not-found">
				<p>No results found...</p>
			</div>
			)
		}

		</>

	)
}

export default Images
