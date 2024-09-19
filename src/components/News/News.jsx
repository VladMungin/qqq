import React from 'react';
import CardNews from './CardNews';

const News = () => {
	return (
		<div className='max-w-[20%] w-full border-2 border-red-300'>
			<CardNews
				title={'title'}
				text={'qweqweqwe'}
				img={'https://via.placeholder.com/300x200'}
			/>
			<CardNews
				title={'title'}
				text={'qweqweqwe'}
				img={'https://via.placeholder.com/300x200'}
			/>
			<CardNews
				title={'title'}
				text={'qweqweqwe'}
				img={'https://via.placeholder.com/300x200'}
			/>
		</div>
	);
};

export default News;
