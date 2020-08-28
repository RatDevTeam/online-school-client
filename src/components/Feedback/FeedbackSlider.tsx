import React, { useState } from 'react';
import { CaretNext, CaretPrevious } from 'grommet-icons';
import './styles.scss';

import FeedbackCard from './FeedbackCard';
import feedbackList from './data.json';

interface IFeedbackSlider {}
const FeedbackSlider: React.FC<IFeedbackSlider> = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const [length] = useState<number>(feedbackList.length);

	const showPrevious = () => {
		if (currentIndex !== 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};
	const showNext = () => {
		if (currentIndex === length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	return (
		<div className="FeedbackSlider__container">
			<CaretPrevious
				className="FeedbackSlider__container--arrow"
				onClick={showPrevious}
				color={currentIndex === 0 ? '#444444' : '#087e8b'}
			/>
			<FeedbackCard
				activeIndex={currentIndex}
				className="FeedbackSlider__container--card"
			/>
			<CaretNext
				className="FeedbackSlider__container--arrow"
				onClick={showNext}
				color={currentIndex === length - 1 ? '#444444' : '#087e8b'}
			/>
		</div>
	);
};
export default FeedbackSlider;
