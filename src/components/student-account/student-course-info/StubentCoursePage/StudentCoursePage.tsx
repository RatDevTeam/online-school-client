import * as React from 'react';
import './styles.scss';
import { useState } from 'react';
import TopNavigation from '../../../TopNavigator/TopNavigation';
import NotFoundPage from '../../../utils/NotFoundPage';
import StudentScripts from '../StudentScripts/StudentScripts';
import StudentHomeWork from '../StudentHomeWork/StudentHomeWork';
import StudentTimeTable from '../StudentTimeTable/StudentTimeTable';

interface IStudentCoursePage {
}

const menuList = [
	{
		id: 1,
		title: 'Курс и расписание',
		page: 1,
	},
	{ id: 2, title: 'Скрипты', page: 2 },
	{ id: 3, title: 'Домашнее задание', page: 3 },
];

const StudentCoursePage: React.FC<IStudentCoursePage> = () => {
	const [page, setPage] = useState<number>(1);

	const router = () => {
		if (page === 1) {
			return <StudentTimeTable/>;
		}
		if (page === 2) {
			return <StudentScripts/>;
		}
		if (page === 3) {
			return <StudentHomeWork/>;
		}
		return <NotFoundPage/>;
	};

	return (
		<div className="student-page">
			<h1>История 21 века вввв</h1>
			<TopNavigation
				menuList={menuList}
				page={page}
				changePage={(i: number) => setPage(i)}
			/>
			<div>{router()}</div>
		</div>
	);
};

export default StudentCoursePage;
