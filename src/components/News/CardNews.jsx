import React from 'react';

const CardNews = ({ title, text, img }) => {
	return (
		<div className='flex mt-3 mx-5'>
			<div className='border-2 border-gray-300 p-6 rounded-lg'>
				<img src={img} alt='Image' />
				<h2 className='text-2xl font-bold mt-4 w-[80%]'>{title}</h2>
				<p className='text-gray-600 mt-2 w-[80%]'>{text}</p>
			</div>
		</div>
	);
};

export default CardNews;
