import React from 'react';
import './styles.scss';
import { Chat } from 'grommet-icons';
import { Teacher } from '../../../schemas/teacher.schema';
import SubjectTag from '../../SubjectTag/SubjectTag';
// @ts-ignore
import img from '../../../../public/bg-courses.svg';

interface ITeacherBlock {
	teacher: Teacher;
}

const TeacherBlock: React.FC<ITeacherBlock> = ({ teacher }) => {
	return (
		<div className="teacher-container">
			<div className="teacher-container__decoration teacher-container__decoration--1" />
			<div className="teacher-container__decoration teacher-container__decoration--2" />
			<div className="teacher-container__decoration teacher-container__decoration--3" />

			<div className="teacher-container__image">
				<img
					className="teacher-container__image--avatar"
					src={teacher.imgUrl || img}
					alt={teacher.name}
				/>
			</div>
			<div className="teacher-container__info">
				<div className="teacher-container__info--title">
					<h2>{teacher.name}</h2>
					{teacher.subject && (
						<SubjectTag
							title={teacher.subject.title}
							color={teacher.subject.color}
						/>
					)}
				</div>
				<p>{teacher.description}</p>
				<div
					role="button"
					tabIndex={0}
					className="teacher-container__info__link"
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
					<div className="teacher-container__info__link__text">
						Связаться с преподавателем
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeacherBlock;
