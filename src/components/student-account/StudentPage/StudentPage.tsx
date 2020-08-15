import * as React from 'react';
import { useRoute } from 'react-router5';
import './styles.scss';
import NotFoundPage from '../../utils/NotFoundPage';
import StudentCourses from '../StudentCourses/StudentCourses';
import StudentCoursePage from '../student-course-info/StubentCoursePage/StudentCoursePage';

interface IStudentPage {}

const StudentPage: React.FC<IStudentPage> = () => {
	const { route } = useRoute();
	const routeName = route.name;

	const router = () => {
		if (routeName === 'student.courses') {
			return <StudentCourses />;
		}
		if (routeName === 'student.courses.course') {
			return <StudentCoursePage/>;
		}
		return <NotFoundPage />;
	};

	return (
		<div className="student-page">
			<div>{router()}</div>
		</div>
	);
};

export default StudentPage;
