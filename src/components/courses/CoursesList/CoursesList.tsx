import * as React from 'react';
import './styles.scss';
import { useEffect, useState } from 'react';
import { useRoute } from 'react-router5';
import MasterCoursePreviewCard from '../MasterCoursePreviewCard/MasterCoursePreviewCard';
import EmptyMasterCoursePreviewCard from '../MasterCoursePreviewCard/EmptyMasterCoursePreviewCard';
import CoursePreviewCard from '../CoursePreviewCard/CoursePreviewCard';
import { Course } from '../../../schemas/course.schema';
import { Subject } from '../../../schemas/subject.schema';

interface ISubjectsPage {
	specialCourses: Course[];
	masterCourses: Course[] | undefined;
	loadingCourses: boolean;
	subjects: Subject[];
}

const subjectsPage: React.FC<ISubjectsPage> = ({
	masterCourses,
	specialCourses,
	loadingCourses,
	subjects,
}) => {
	const [currentSubject, setCurrentSubject] = useState<string | null>(null);
	const [masterCourse, setMasterCourse] = useState<Course | undefined>(
		undefined
	);

	const { router } = useRoute();

	const getColorSubject = (type: string, color: string): string => {
		if (currentSubject !== null) {
			return currentSubject === type ? color : '#C1CFDA';
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

	useEffect(() => {
		getMasterCourse();
	}, [currentSubject]);

	const getMasterCourse = () => {
		if (masterCourses) {
			if (currentSubject) {
				setMasterCourse(
					masterCourses.find((c) => c.subject.type === currentSubject)
				);
				return;
			}
		}
		setMasterCourse(undefined);
	};

	return !loadingCourses ? (
		<div className="courses">
			<div className="courses__select">
				<h1>Курсы</h1>
				<p>
					В ЛикБез можно готовиться к экзаменам так, как удобно! Выбери предмет
					и курс. Посмотри короткий разбор темы или поступи в мастер группу,
					чтобы заниматься в реальном времени{' '}
				</p>
				<fieldset>
					<legend>Выбери предмет:</legend>
					<div className="subjects">
						{subjects &&
							subjects.map((subject: Subject) => (
								<button
									type="button"
									className="ui-button"
									style={{
										backgroundColor: getColorSubject(
											subject.type,
											subject.color
										),
									}}
									onClick={() => onClickSubject(subject.type)}
								>
									{subject.title}
								</button>
							))}
					</div>
				</fieldset>
			</div>
			<div className="courses__master">
				{masterCourse && currentSubject ? (
					<>
						<h1>Мастер курс</h1>
						<MasterCoursePreviewCard course={masterCourse} />
					</>
				) : (
					<EmptyMasterCoursePreviewCard />
				)}
			</div>
			<div className="courses__special">
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
			</div>
		</div>
	) : (
		<p>Загрузка...</p>
	);
};
export default subjectsPage;
