import React from 'react';
import { FeedbackSchema } from '../../schemas/feedback.schema';
import feedbackList from './data.json';
// @ts-ignore
import bg from '../../../public/bg-courses.svg';
import './styles.scss';

interface IFeedbackCard {
	activeIndex: number;
	className?: string;
}
const FeedbackCard: React.FC<IFeedbackCard> = ({ activeIndex, className }) => {
	const feedbackItem: FeedbackSchema = feedbackList[activeIndex];

	return (
		<div className={className}>
			<div className="FeedbackCard__imageContainer">
				<img
					src={feedbackItem.imgUrl || bg}
					alt="Студент ЛикБез"
					className="FeedbackCard__imageContainer--image"
					style={feedbackItem.customStyle}
				/>
			</div>
			<div className="FeedbackCard__mainContainer">
				<h4 className="FeedbackCard__mainContainer--name">
					{feedbackItem.name}
				</h4>
				<p>{feedbackItem.feedback}</p>
			</div>
		</div>
	);
};
export default FeedbackCard;
