import React, { useEffect, useState } from 'react';
import { useRoute } from 'react-router5';
import { Calendar, Money } from 'grommet-icons';
import { Course } from '../../../schemas/course.schema';
import NotFoundPage from '../../utils/NotFoundPage';
import { Teacher } from '../../../schemas/teacher.schema';
import TeacherBlock from '../TeacherBlock/TeacherBlock';
import { inNotEmptyArray, convertDate } from '../../../utils';

interface ICourseInfoPage {
	courses: Course[];
	teachers: Teacher[];
	getTeachers: (ids: string[]) => void;
}

const CourseInfoPage: React.FC<ICourseInfoPage> = ({
	courses,
	teachers,
	getTeachers,
}) => {
	const { route } = useRoute();
	const [course, setCourse] = useState<Course | undefined>(undefined);
	const [notFound, setNotFound] = useState<boolean>(false);

	const getCourse = (collection: Course[]) => {
		const findCourse = collection.find((c) => c._id === route.params.id);
		setNotFound(!findCourse);
		return findCourse;
	};

	useEffect(() => {
		if (inNotEmptyArray(courses)) {
			setCourse(getCourse(courses));
		}
	}, [courses]);

	useEffect(() => {
		if (course && course.teachers) {
			getTeachers(course.teachers);
		}
	}, [course]);

	if (course && teachers) {
		return (
			<>
				<div className="course-info">
					<div className="course-info__header">
						<h1>Курс: {course.title}</h1>
						<div
							className="ui-tag tag"
							style={{ backgroundColor: course.subject.color }}
						>
							{course.subject.title}
						</div>
					</div>
					<div className="course-info__description">
						<h2>Описание курса</h2>
						<p>{course.description}</p>
						<fieldset>
							<legend>О курсе</legend>
							<div className="course-info__description__content">
								<div className="course-info__description__content__item">
									<div className="course-info__description__content__item-title">
										Старт курса
									</div>
									<div className="course-info__description__content__item-body">
										<Calendar color="#0B3954" />
										<p>{convertDate(course.dateStart)}</p>
									</div>
								</div>
								<div className="course-info__description__content__item">
									<div className="course-info__description__content__item-title">
										Финиш курса
									</div>
									<div className="course-info__description__content__item-body">
										<Calendar color="#0B3954" />
										<p>{convertDate(course.dateFinish)}</p>
									</div>
								</div>
								<div className="course-info__description__content__item">
									<div className="course-info__description__content__item-title">
										Стоимость
									</div>
									<div className="course-info__description__content__item-body">
										<Money color="#0B3954" />
										<p>{course.price ? course.price : 0} РУБ.</p>
									</div>
								</div>
							</div>
						</fieldset>
					</div>
					<div className="course-info__teachers">
						{course.teachers ? (
							<>
								<h2>Преподаватели</h2>
								{teachers.map((teacher) => (
									<TeacherBlock teacher={teacher} />
								))}
							</>
						) : (
							<h4>Информация о преподавателях отсутсвует</h4>
						)}
					</div>
				</div>
			</>
		);
	}
	return notFound ? <NotFoundPage /> : <p>Загрузка...</p>;
};

export default CourseInfoPage;
