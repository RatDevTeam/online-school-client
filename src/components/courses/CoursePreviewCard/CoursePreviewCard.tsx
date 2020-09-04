import React from 'react';
import './style.scss';
import { Calendar } from 'grommet-icons';
import { convertDate } from '../../../utils';

interface ICoursePreview {
	title: string;
	subject: string;
	color: string;
	date: string;
	price: string;
	img: string;
}
const CoursePreviewCard: React.FC<ICoursePreview> = ({
	title,
	subject,
	color,
	date,
	price,
	img,
}) => {
	return (
		<>
			<div className="container-course-preview__image" style={{backgroundImage: img ? `url(${img})` : ''}}>
				<div className="container-course-preview__image__tags">
					<div className="ui-tag" style={{ backgroundColor: color }}>
						{subject}
					</div>
					<div className="ui-tag price">Спецкурс</div>
				</div>
			</div>
			<div className="container-course-preview__info">
				<h2 className="container-course-preview__info__title">{title}</h2>
				<div className="container-course-preview__info__bottom">
					<div className="container-course-preview__info__bottom__date">
						<Calendar color="#0B3954" />
						<p>{convertDate(date)}</p>
					</div>
					<div className="ui-tag price">{`${price || '0'} РУБ.`}</div>
				</div>
			</div>
		</>
	);
};
export default CoursePreviewCard;
