import React from 'react';
import './style.scss';

interface IEmptyMasterCoursePreviewCard {}

const EmptyMasterCoursePreviewCard: React.FC<IEmptyMasterCoursePreviewCard> = () => {
	return (
		<div className="empty">
			<div className="empty__image" />
			<div className="empty__text">
				Скоро здесь появится мастер-курс.{' '}
				<a
					href="https://vk.com/id570303798"
					target="_blank"
					rel="noopener noreferrer"
				>
					Подпишитесь на обновления
				</a>{' '}
				и узнайте первым о&#160;старте курса!
			</div>
		</div>
	);
};

export default EmptyMasterCoursePreviewCard;
