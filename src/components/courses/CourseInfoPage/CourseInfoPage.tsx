import React, { useEffect, useState } from 'react';
import { useRoute } from 'react-router5';
import { Course } from '../../../schemas/course.schema';
import NotFoundPage from '../../utils/NotFoundPage';
import { Teacher } from '../../../schemas/teacher.schema';
import TeacherBlock from '../TeacherBlock/TeacherBlock';
import { inNotEmptyArray } from '../../../utils';

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
		if (course) {
			getTeachers(course.teachers);
		}
	}, [course]);

	if (course && teachers) {
		return (
			<>
				<h3>{course.title}</h3>
				<div
					className="ui-tag"
					style={{ backgroundColor: course.subject.color }}
				>
					{course.subject.title}
				</div>
				<h4>Описание курса</h4>
				<p>{course.description}</p>
				<h4>Преподователи</h4>
				{teachers.map((teacher) => (
					<TeacherBlock teacher={teacher} />
				))}
			</>
		);
	}
	return notFound ? <NotFoundPage /> : <p>Загрузка...</p>;
};

export default CourseInfoPage;
