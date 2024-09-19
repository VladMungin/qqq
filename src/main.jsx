import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Calendar from './components/Calendar/Calendar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import Logo from './components/Logo/Logo.jsx';
import News from './components/News/News.jsx';
import Tags from './components/Tags/Tags.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<div className='grid max-w-[1400px] mx-auto grid-cols-1'>
				<div className='flex justify-between sticky top-0'>
					<Logo />
					<Header />
				</div>
				<div className='flex justify-between items-start mt-5 w-full'>
					<News />
					<App />
					<div className='flex flex-col max-w-[20%]'>
						<Calendar />
						<Tags />
					</div>
				</div>

				<Footer />
			</div>
		</BrowserRouter>
	</StrictMode>
);
