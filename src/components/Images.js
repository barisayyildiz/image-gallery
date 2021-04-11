import React from 'react'

import '../styles/Images.scss';

function Images() {

	const images = [
		"https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg",
		"https://www.hisglobal.com.tr/assets/images/1581429467.jpg",
		"https://turkishairlines.ssl.cdn.sdlmedia.com/637389593236221508JQ.jpg",
		"https://media-cdn.t24.com.tr/media/library/2019/11/1574324226168-107433952-gettyimages-1129015854.jpg",
		"https://birparcatuhaftik.com/wp-content/uploads/2019/11/istanbul-1.jpg",
		"https://assets.enuygun.com/media/lib/570x400/uploads/image/5617.jpeg",
		"https://i.hurimg.com/i/hdn/75/0x0/5eb9129067b0a91a4070d3b0.jpg"
	]

	return (
		<div className="image-container">

			{
				images.map((item, key) => <img src={item}></img>)
			}


			
		</div>
	)
}

export default Images
