import * as React from 'react';
import './style.scss';
import { Calendar, Group } from 'grommet-icons';
import { useRoute } from 'react-router5';
import { Course } from '../../../schemas/course.schema';
import { convertDate } from '../../../utils';

interface IMasterCoursePreviewCard {
	course: Course;
}
const MasterCoursePreviewCard: React.FC<IMasterCoursePreviewCard> = ({
	course,
}) => {
	const { router } = useRoute();
	return (
		<div className="container-master">
			<div className="container-master__image" />
			<div className="container-master__info">
				<h1 className="container-master__info__title">{course.title}</h1>
				<div className="container-master__info__body">{course.description}</div>
				<button
					type="button"
					className="ui-button link"
					onClick={() => router.navigate('courses.course', { id: course._id })}
				>
					Подробнее
				</button>
				<div className="container-master__info__bottom">
					<div className="container-master__info__bottom__element">
						<div className="container-master__info__bottom__title">
							Старт курса
						</div>
						<div className="container-master__info__bottom__body">
							<Calendar />
							<p>{convertDate(course.dateStart)}</p>
						</div>
					</div>
					<div className="container-master__info__bottom__element">
						<div className="container-master__info__bottom__title">
							Размер группы
						</div>
						<div className="container-master__info__bottom__body">
							<Group />
							<p>30 человек</p>
						</div>
					</div>
					<div className="container-master__info__bottom__element price">
						<div className="ui-tag price">{`${course.price || '0'} РУБ.`}</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default MasterCoursePreviewCard;
