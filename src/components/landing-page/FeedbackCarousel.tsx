import React from 'react';
import { Attraction } from 'grommet-icons';
import { Carousel, Box, Avatar, Anchor } from 'grommet';

const Feedback: React.FC = () => {
	const feedback = [
		{
			userPic: 'https://github.com/ShimiSun',
			name: 'Иван Иванов',
			text:
				'Разнообразный и богатый опыт консультация с широким активом позволяет оценить значение дальнейших направлений развития. Повседневная практика показывает, что начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке форм развития. С другой стороны укрепление и развитие структуры требуют определения и уточнения модели развития. ',
		},
	];
	return (
		<Box align="center" fill="horizontal">
			<Carousel fill>
				{feedback.map((item) => (
					<Box pad="large" background="accent-1" key={item.name} height="400px">
						<Avatar />
						<Anchor color="white" href="https://github.com/ShimiSun">
							{item.name}
						</Anchor>
						<Attraction size="xlarge" />
					</Box>
				))}
			</Carousel>
		</Box>
	);
};
export default Feedback;
