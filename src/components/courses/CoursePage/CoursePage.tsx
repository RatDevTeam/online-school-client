import React, { useEffect } from 'react';
import { useRouteNode } from 'react-router5';
import { Course } from '../../../schemas/course.schema';
import { Subject } from '../../../schemas/subject.schema';
import CourseInfoPage from '../CourseInfoPage/CourseInfoPage';
import CoursesList from '../CoursesList/CoursesList';
import { Teacher } from '../../../schemas/teacher.schema';

interface ICoursePage {
	courses: Course[];
	specialCourses: Course[];
	masterCourses: Course[];
	loadingCourses: boolean;
	subjects: Subject[];
	teachers: Teacher[];
	getCourses: () => void;
	getSubjects: () => void;
	getTeachersByIds: (ids: string[]) => void;
}

const CoursePage: React.FC<ICoursePage> = ({
	courses,
	specialCourses,
	masterCourses,
	loadingCourses,
	subjects,
	teachers,
	getCourses,
	getSubjects,
	getTeachersByIds,
}) => {
	const { route } = useRouteNode('courses');

	useEffect(() => {
		getCourses();
		getSubjects();
	}, []);

	if (route.name === 'courses.course') {
		return (
			<CourseInfoPage
				courses={courses}
				teachers={teachers}
				getTeachers={getTeachersByIds}
			/>
		);
	}
	return (
		<CoursesList
			specialCourses={specialCourses}
			masterCourses={masterCourses}
			loadingCourses={loadingCourses}
			subjects={subjects}
		/>
	);
};

export default CoursePage;
