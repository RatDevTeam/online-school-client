import React from 'react';
import '../../styles.scss';

interface ISubjectTagProps {
	title: string;
	color: string;
}
const SubjectTag: React.FC<ISubjectTagProps> = ({ title, color }) => {
	const style: React.CSSProperties = {
		backgroundColor: color,
	};

	return (
		<div className="ui-button" style={style}>
			{title}
		</div>
	);
};

export default SubjectTag;
