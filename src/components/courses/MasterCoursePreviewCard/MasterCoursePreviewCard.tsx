import * as React from 'react';
import './style.scss';
import { Calendar, Group } from 'grommet-icons';
import { Course } from '../../../schemas/course.schema';
import { convertDate } from '../../../utils';

interface IMasterCoursePreviewCard {
	course: Course;
}
const MasterCoursePreviewCard: React.FC<IMasterCoursePreviewCard> = ({
	course,
}) => {
	return (
		<div className="container-master">
			<div className="container-master__image" />
			<div className="container-master__info">
				<h1 className="container-master__info__title">{course.title}</h1>
				<p>{course.description}</p>
				<div className="container-master__info__bottom">
					<div className="container-master__info__bottom__element">
						<Calendar />
						<p>{convertDate(course.dateStart)}</p>
					</div>
					<div className="container-master__info__bottom__element">
						<Group />
						<p>30 человек</p>
					</div>
					<div className="ui-tag" style={{ backgroundColor: 'red' }}>
						{`${course.price || '0'} РУБ.`}
					</div>
				</div>
			</div>
		</div>
	);
};
export default MasterCoursePreviewCard;
