import { Map, YMaps } from '@pbe/react-yandex-maps';
import React from 'react';

const Card = () => {
	return (
		<div>
			<YMaps>
				<div>
					<Map
						width={500}
						height={500}
						defaultState={{ center: [55.75, 37.57], zoom: 9 }}
					/>
				</div>
			</YMaps>
		</div>
	);
};

export default Card;
