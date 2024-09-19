import React from 'react';

const PriceCard = ({ title, price }) => {
	return (
		<div className='flex gap-2 mt-5'>
			<p>{title}</p>
			<p>{price} $</p>
		</div>
	);
};

export default PriceCard;
