import React from 'react';
import { SupTitle } from '../../UI/SupTitle.jsx';
import { Heading2 } from '../../UI/Heading2.jsx';
import project_1 from '../../../assets/images/MainPageImages/portfolio-1.png';
import project_2 from '../../../assets/images/MainPageImages/portfolio-2.jpg';
import project_3 from '../../../assets/images/MainPageImages/portfolio-3.png';
import project_4 from '../../../assets/images/MainPageImages/portfolio-4.jpg';
import { Button } from '../../UI/Button.jsx';
import { useSelector } from 'react-redux';
import { selectLangItems } from '../../../store/slices/lang/selectors.js';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Portfolio = () => {
	const { portfolio } = useSelector(selectLangItems);
	return (
		<section className="container py-16" id="portfolio">
			<div
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="0"
				data-aos-offset="400"
			>
				<SupTitle>{portfolio.suptitle}</SupTitle>
				<Heading2 className="mb-10 dark:text-light duration-500">
					{portfolio.title}
				</Heading2>
			</div>
			<ul className="grid gap-y-10 gap-x-5 grid-cols-12">
				<li
					className="col-span-6"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<LazyLoadImage
								className="rounded-xl object-cover w-full h-full"
								src={project_1}
								alt="Интернет-магазин"
								effect={'blur'}
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							{portfolio.cards[0].name}
						</figcaption>
					</figure>
				</li>
				<li
					className="col-span-6  "
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<LazyLoadImage
								className="rounded-xl object-cover w-full h-full"
								src={project_2}
								alt="Сайт-портфолио"
								effect={'blur'}
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							{portfolio.cards[1].name}
						</figcaption>
					</figure>
				</li>
				<li
					className="col-span-6  "
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<LazyLoadImage
								className="rounded-xl object-cover w-full h-full"
								src={project_3}
								alt="Сайт-портфолио"
								effect={'blur'}
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							{portfolio.cards[2].name}
						</figcaption>
					</figure>
				</li>
				<li
					className="col-span-6"
					data-aos="fade-up"
					data-aos-duration="1000"
					data-aos-delay="0"
					data-aos-offset="400"
				>
					<figure className="group flex justify-center flex-col items-center">
						<div className="group p-5 w-[590px] h-[400px] border rounded-3xl border-gray-100 hover:border-primary ease-linear duration-300 cursor-pointer">
							<LazyLoadImage
								className="rounded-xl object-cover w-full h-full"
								src={project_4}
								alt="Сайт-портфолио"
								effect={'blur'}
							/>
						</div>
						<figcaption className="group-hover:text-primary ease-linear duration-300 font-semibold text-2xl mt-8 dark:text-light">
							{portfolio.cards[3].name}
						</figcaption>
					</figure>
				</li>
			</ul>
			<div
				className="flex justify-center items-center mt-10"
				data-aos="fade-up"
				data-aos-duration="1000"
				data-aos-delay="0"
				data-aos-offset="500"
			>
				<Button className="text-dark hover:text-light dark:text-light duration-500">
					{portfolio.button}
				</Button>
			</div>
		</section>
	);
};
