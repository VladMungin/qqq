import React from 'react';
import ContactsCard from './ContactsCard';

const Contacts = () => {
	return (
		<div className='flex flex-col items-center justify-center gap-5 w-[80%]'>
			<ContactsCard title={'Важный номер'} phone={'8-800-555-35-35'} />
			<ContactsCard title={'Важный номер'} phone={'8-800-555-35-35'} />
			<ContactsCard title={'Важный номер'} phone={'8-800-555-35-35'} />
		</div>
	);
};

export default Contacts;
