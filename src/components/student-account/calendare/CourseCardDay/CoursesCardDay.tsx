import * as React from 'react';
import { Box, Text } from 'grommet';

interface ICoursesCardDay {
	date: string;
	text: string;
	active: boolean;
}

const CoursesCardDay: React.FC<ICoursesCardDay> = ({ date, text, active }) => {
	const convertDate = (d: string): string => {
		const newDate = new Date(d);
		const day = newDate.getDate();
		const hours = newDate.getHours();
		const minutes = newDate.getMinutes();
		return `${day} | ${hours}:${minutes}`;
	};

	const spliseText = (t: string) => {
		if (t.length > 30) {
			const newText = t.slice(0, 28);
			return `${newText}...`;
		}
		return t;
	};

	return (
		<Box direction="column" height="100%">
			<Box
				background={active ? 'neutral-2' : 'brand'}
				height="small"
				align="center"
				justify="center"
			>
				{convertDate(date)}
			</Box>
			<Box
				background={active ? 'brand' : undefined}
				height="medium"
				align="center"
				justify="center"
				pad={{ horizontal: '10px' }}
			>
				<Text
					color={active ? '#fff' : 'dark-1'}
					textAlign="start"
					wordBreak="break-word"
				>
					{spliseText(text)}
				</Text>
			</Box>
		</Box>
	);
};

export default CoursesCardDay;
