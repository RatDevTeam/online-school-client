import * as React from 'react';
import './styles.scss';
import { Button } from 'grommet';
import { useState } from 'react';
import { useRoute } from 'react-router5';
import MasterCoursePreviewCard from '../MasterCoursePreviewCard/MasterCoursePreviewCard';
import CoursePreviewCard from '../CoursePreviewCard/CoursePreviewCard';
import { Course } from '../../../schemas/course.schema';
import { Subject } from '../../../schemas/subject.schema';

interface ISubjectsPage {
	specialCourses: Course[];
	masterCourse: Course | undefined;
	loadingCourses: boolean;
	subjects: Subject[];
}

const subjectsPage: React.FC<ISubjectsPage> = ({
	masterCourse,
	specialCourses,
	loadingCourses,
	subjects,
}) => {
	const [currentSubject, setCurrentSubject] = useState<string | null>(null);
	const { router } = useRoute();

	const getColorSubject = (type: string, color: string): string => {
		if (currentSubject !== null) {
			return currentSubject === type ? '#fff' : '#000';
		}
		return color;
	};
	const onClickSubject = (type: string) => {
		if (type === currentSubject) {
			setCurrentSubject(null);
		} else {
			setCurrentSubject(type);
		}
	};

	const filterCourses = (): Course[] => {
		if (specialCourses) {
			if (currentSubject) {
				const courses = specialCourses.filter(
					(c) => c.subject.type === currentSubject
				);
				return courses;
			}
			return specialCourses;
		}
		return [];
	};

	return !loadingCourses ? (
		<>
			<h1>Курсы</h1>
			<div className="subjects">
				{subjects &&
					subjects.map((subject) => (
						<Button
							primary
							key={subject._id}
							label={subject.title}
							color={getColorSubject(subject.type, subject.color)}
							size="medium"
							onClick={() => onClickSubject(subject.type)}
						/>
					))}
			</div>
			{masterCourse ? (
				<>
					<h1>Мастер курс</h1>
					<MasterCoursePreviewCard course={masterCourse} />
				</>
			) : null}
			<h1>Спецкурсы</h1>
			<div className="ui-items-container">
				{filterCourses().map((course, index) => {
					return (
						<div
							className="ui-items-container__item"
							role="button"
							tabIndex={index + 10}
							onClick={(event: React.MouseEvent) => {
								event.preventDefault();
								router.navigate('courses.course', { id: course._id });
							}}
							onKeyDown={(event: React.KeyboardEvent) => {
								if (event.key !== 'Tab') {
									event.preventDefault();
									router.navigate('courses.course', { id: course._id });
								}
							}}
						>
							<CoursePreviewCard
								key={course._id}
								title={course.title}
								color={course.subject.color}
								subject={course.subject.title}
								price={course.price}
								date={course.dateStart}
							/>
						</div>
					);
				})}
			</div>
		</>
	) : (
		<p>Загрузка...</p>
	);
};
export default subjectsPage;
