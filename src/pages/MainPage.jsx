import React from 'react';
import { SvgIcon } from '../components/UI/index.jsx';
import { Hero } from '../components/MainPageComponents/Hero/Hero';
import { About } from '../components/MainPageComponents/About/About';

const MainPage = () => {
	return (
		<div>
			<Hero/>
			<About/>
		</div>
	);
};

export default MainPage;
