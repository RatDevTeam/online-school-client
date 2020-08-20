import * as React from 'react';
import { useRoute } from 'react-router5';
import './styles.scss';
import TopNavigation from '../../TopNavigator/TopNavigation';
import NotFoundPage from '../../utils/NotFoundPage';
import StudentCourses from '../StudentCourses/StudentCourses';
import StudentScripts from '../StudentScripts/StudentScripts';
import StudentHomeWork from '../StudentHomeWork/StudentHomeWork';

interface IStudentPage {}

const menuList = [
	{ id: 1, title: 'Курсы и расписание', linkName: 'student.courses' },
	{ id: 2, title: 'Скрипты', linkName: 'student.scripts' },
	{ id: 3, title: 'Домашнее задание', linkName: 'student.home' },
];

const StudentPage: React.FC<IStudentPage> = () => {
	const { route } = useRoute();
	const subRouteName = route.name.split('.')[1];

	const router = () => {
		if (subRouteName === 'courses') {
			return <StudentCourses />;
		}
		if (subRouteName === 'scripts') {
			return <StudentScripts />;
		}
		if (subRouteName === 'home') {
			return <StudentHomeWork />;
		}
		return <NotFoundPage />;
	};

	return (
		<div className="student-page">
			<h1>История 21 века вввв</h1>
			<TopNavigation menuList={menuList} />
			<div>{router()}</div>
		</div>
	);
};

export default StudentPage;
