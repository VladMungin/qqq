import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className='border-2 border-red-300 w-[80%] py-4'>
			<nav>
				<ul className='flex items-center justify-center gap-2'>
					<li>
						<Link to={'/'}>Новости</Link>
					</li>
					<li>
						<Link to={'/about'}>Об организации</Link>
					</li>
					<li>
						<Link to={'/price'}>Прайс</Link>
					</li>
					<li>
						<Link to={'/contacts'}>Контакты</Link>
					</li>
					<li>
						<Link to={'/card'}>Карты</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
