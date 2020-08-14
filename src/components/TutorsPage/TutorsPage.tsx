import React, { useEffect } from 'react';
import { Teacher } from '../../schemas/teacher.schema';

import './styles.scss';
import TeacherBlock from '../courses/TeacherBlock/TeacherBlock';

interface ITutorPageProps {
	isTeacherLoading: boolean;
	isTeacherError: any;
	teachers: Teacher[];
	getTeachers: () => void;
}
const TutorsPage: React.FC<ITutorPageProps> = ({
	isTeacherLoading,
	isTeacherError,
	teachers,
	getTeachers,
}) => {
	useEffect(() => {
		getTeachers();
		console.log(teachers);
	}, []);

	useEffect(() => {
		console.log(teachers);
	}, [teachers]);

	return (
		<div className="tutors">
			<h1>Преподаватели ЛикБез</h1>
			<div className="ui-items-container">
				{isTeacherLoading ? (
					<>Загрузка...</>
				) : (
					teachers.map((teacher) => (
						<div className="ui-items-container__item">
							<TeacherBlock teacher={teacher} key={teacher.name} />
						</div>
					))
				)}
			</div>
		</div>
	);
};
export default TutorsPage;
