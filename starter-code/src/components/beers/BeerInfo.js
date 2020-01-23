import React from 'react';
import './BeerInfo.css';

const BeerInfo = ({
	image_url,
	name,
	tagline,
	attenuation_level,
	description }) =>
	<div className='beer-info'>
		<img src={image_url} alt="Beer" />
		<div>
			<p>{name}</p>
			<p>{attenuation_level}</p>
		</div>
		<div>{tagline}</div>
		<div>{description}</div>
	</div>

export default BeerInfo;