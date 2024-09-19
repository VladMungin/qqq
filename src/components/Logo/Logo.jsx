import React from 'react';
import viteLogo from '/vite.svg';

const Logo = () => {
	return (
		<div className='w-[20%] border-2 border-red-300'>
			<img src={viteLogo} className='mx-auto block pt-4' alt='Vite logo' />
		</div>
	);
};

export default Logo;
