import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CardNews from './CardNews';

const NewsPage = () => {
	const [news, setNews] = useState([]);

	const fetchNews = async () => {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/posts'
			);
			return response.data;
		} catch (error) {
			console.error('Ошибка при загрузке новостей:', error);
			return [];
		}
	};

	useEffect(() => {
		const getNews = async () => {
			const newsData = await fetchNews();
			setNews(newsData);
		};
		getNews();
	}, []);

	return (
		<div>
			<h1 className='text-3xl font-bold text-center mb-2'>Новости</h1>
			{news?.map(item => {
				return (
					<CardNews
						title={item.title}
						text={item.body}
						img={'https://via.placeholder.com/300x200'}
					/>
				);
			})}
		</div>
	);
};

export default NewsPage;
