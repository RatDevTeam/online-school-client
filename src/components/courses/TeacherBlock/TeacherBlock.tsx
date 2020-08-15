import React from 'react';
import './styles.scss';
import { Chat } from 'grommet-icons';
import { Teacher } from '../../../schemas/teacher.schema';
// @ts-ignore
import img from '../../../../public/bg-courses.svg';

interface ITeacherBlock {
	teacher: Teacher;
}

const TeacherBlock: React.FC<ITeacherBlock> = ({ teacher }) => {
	return (
		<div className="TeacherContainer">
			<div className="TeacherContainer__image">
				<img
					className="TeacherContainer__image--avatar"
					src={teacher.imgUrl || img}
					alt={teacher.name}
				/>
			</div>
			<div className="TeacherContainer__info">
				<h2>{teacher.name}</h2>
				<p>{teacher.description}</p>
				<div
					role="button"
					tabIndex={0}
					className="TeacherContainer__info__link"
					onClick={(event: React.MouseEvent) => {
						event.preventDefault();
						window.open(`${teacher.vkUrl}`);
					}}
					onKeyDown={(event: React.KeyboardEvent) => {
						event.preventDefault();
						window.open(`${teacher.vkUrl}`);
					}}
				>
					<Chat color="#087e8b" />
					<div className="TeacherContainer__info__link__text">
						Связаться с преподавателем
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherBlock;
