import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Card from './components/Card/Card';
import Contacts from './components/Contacts/Contacts';
import NewsPage from './components/News/NewsPage';
import Price from './components/Price/Price';

function App() {
	return (
		<Routes>
			<Route index element={<NewsPage />} />
			<Route path='/about' element={<About />} />
			<Route path='/price' element={<Price />} />
			<Route path='contacts' element={<Contacts />} />
			<Route path='/card' element={<Card />} />
		</Routes>
	);
}

export default App;
