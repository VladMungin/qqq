import React from 'react';

const Calendar = () => {
	return (
		<input
			className='border-2 border-red-300'
			type='date'
			value={new Date(Date.now()).toISOString().split('T')[0]}
		/>
	);
};

export default Calendar;
