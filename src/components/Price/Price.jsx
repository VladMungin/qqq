import React from 'react';
import PriceCard from './PriceCard';

const Price = () => {
	return (
		<div>
			<PriceCard price={800} title={'Ноготочки'} />
			<PriceCard price={8000} title={'Волосы'} />
			<PriceCard price={300} title={'Брови'} />
		</div>
	);
};

export default Price;
