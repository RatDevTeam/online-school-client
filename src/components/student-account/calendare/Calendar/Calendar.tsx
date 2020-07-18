import * as React from 'react';
import { Grommet, Table, TableBody, TableCell, TableRow } from 'grommet';
import CoursesCardDay from '../CourseCardDay/CoursesCardDay';
import DefaultCardDay from '../DefaultCardDay/DefaultCardDay';

interface ICalendar {
	dayList: any[][];
}

const Calendar: React.FC<ICalendar> = ({ dayList }) => {
	const [activeIdx, setActiveIdx] = React.useState<number | undefined>();

	const definitionContents = (day: any, idx: number): any => {
		switch (day.type) {
			case 'COURSES':
				return (
					<CoursesCardDay
						date={day.date}
						text={day.description}
						active={idx === activeIdx}
					/>
				);
			case 'TODAY':
				return <DefaultCardDay today />;
			default:
				return <DefaultCardDay />;
		}
	};

	const customTheme = {
		global: {
			font: {
				family: 'Helvetica',
			},
		},
		table: {
			body: {
				align: 'center',
				border: '1px solid red',
				width: '120px',
				height: '120px',
				pad: '0',
				margin: '0',
			},
		},
	};

	return (
		<Grommet theme={customTheme}>
			<Table>
				<TableBody>
					{dayList.map((week) => (
						<TableRow>
							{week.map((day) => (
								<TableCell onClick={() => setActiveIdx(day.id)}>
									{definitionContents(day, day.id)}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Grommet>
	);
};

export default Calendar;
