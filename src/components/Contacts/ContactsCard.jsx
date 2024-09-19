import React from 'react';

const ContactsCard = ({ title, phone }) => {
	return (
		<div>
			<p>{title}</p>
			<p>{phone}</p>
		</div>
	);
};

export default ContactsCard;
