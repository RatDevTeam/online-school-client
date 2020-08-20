import React, { useEffect } from 'react';
import { Teacher } from '../../schemas/teacher.schema';

import './styles.scss';
import TeacherBlock from '../courses/TeacherBlock/TeacherBlock';

interface ITutorPageProps {
	isTeacherLoading?: boolean;
	isTeacherError?: any;
	teachers: Teacher[];
	getTeachers: () => void;
}
const TutorsPage: React.FC<ITutorPageProps> = ({
	isTeacherLoading,
	teachers,
	getTeachers,
}) => {
	useEffect(() => {
		getTeachers();
		console.log(teachers);
	}, []);

	return (
		<div className="tutors">
			<h1>Преподаватели ЛикБез</h1>
			<p>
				Преподаватели ЛикБез — это команда вдохновленных профессионалов, которые
				обожают свое дело. Мы помогаем сдать экзамены на желаемые баллы и
				поступить туда, куда ты хочешь. Если у тебя возникли вопросы, не
				стесняйся, можешь написать нам лично!
			</p>
			{isTeacherLoading ? (
				<>Загрузка...</>
			) : (
				<div className="ui-items-container">
					{teachers &&
						teachers.map((teacher) => (
							<div className="ui-items-container__item tutors__cards">
								<TeacherBlock teacher={teacher} key={teacher.name} />
							</div>
						))}
				</div>
			)}
		</div>
	);
};
export default TutorsPage;
