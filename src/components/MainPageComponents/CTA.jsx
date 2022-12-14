import React from 'react';
import { SvgIcon } from '../UI/SvgIcon/index.jsx';
import { Heading3 } from '../UI/Heading3.jsx';
import { Heading4 } from '../UI/Heading4.jsx';
import { Button } from '../UI/Button.jsx';

export const CTA = () => {
	return (
		<section
			className={
				'bg-cta w-full h-[271px] bg-cover bg-no-repeat flex flex-col gap-[20px] py-[60px] items-center justify-center'
			}
            id="cta"
		>
			<Heading3 className="text-light">
                Свяжитесь с нами!
			</Heading3>

            <Heading4 className="text-light text-center max-w-[960px]">
                Не нужно ждать — нужно действовать! Закажи разработку сайта прямо сейчас и не переживай об удобстве клиентов.
			</Heading4>

            <Button className="">Связаться</Button>
		</section>
	);
};