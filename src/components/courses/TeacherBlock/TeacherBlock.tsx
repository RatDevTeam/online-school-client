import React from 'react';
import './styles.scss';
import { Chat } from 'grommet-icons';
import { Teacher } from '../../../schemas/teacher.schema';

interface ITeacherBlock {
	teacher: Teacher;
}

const TeacherBlock: React.FC<ITeacherBlock> = ({ teacher }) => {
	return (
		<div className="container-teacher">
			<img
				className="avatar"
				src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80"
				alt="Аватар"
			/>
			<div className="container-teacher__info">
				<h2>{teacher.name}</h2>
				<p>{teacher.description}</p>
				<div
					role="button"
					tabIndex={0}
					className="container-teacher__info__link"
					onClick={(event: React.MouseEvent) => {
						event.preventDefault();
						window.open(`${teacher.vkUrl}`);
					}}
					onKeyDown={(event: React.KeyboardEvent) => {
						event.preventDefault();
						window.open(`${teacher.vkUrl}`);
					}}
				>
					<Chat />
					<p className="container-teacher__info__link__text">
						Связаться с преподавателем
					</p>
				</div>
			</div>
		</div>
	);
};

export default TeacherBlock;
