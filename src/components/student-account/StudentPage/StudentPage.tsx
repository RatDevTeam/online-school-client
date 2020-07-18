import * as React from 'react';
import './styles.scss';
import TopNavigation from '../../TopNavigator/TopNavigation';

interface ISudentPage {}

const menuList = [
	{ id: 1, title: 'Курсы и расписание', linkName: 'student.courses' },
	{ id: 2, title: 'Скрипты', linkName: 'student.scripts' },
	{ id: 3, title: 'Домашнее задание', linkName: 'student.home' },
];

const StudentPage: React.FC<ISudentPage> = () => {
	return (
		<div className="student-page">
			<h1>История 21 века вввв</h1>
			<TopNavigation menuList={menuList} />
		</div>
	);
};

export default StudentPage;
