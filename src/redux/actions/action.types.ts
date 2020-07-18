import { CourseActions } from './course.action';
import { SubjectActions } from './subject.action';
import { Course } from '../../schemas/course.schema';
import { Subject } from '../../schemas/subject.schema';
import { Teacher } from '../../schemas/teacher.schema';
import { TeacherActions } from './teacher.action';

export interface CourseLoading {
	type: CourseActions.COURSE_LOADING;
}

export interface CourseSuccess {
	type: CourseActions.COURSE_SUCCESS;
	payload: Course[];
}

export interface CourseErr {
	type: CourseActions.COURSE_ERR;
	payload: any;
}

export interface CourseAdd {
	type: CourseActions.COURSE_ADD;
	payload: Course;
}

export interface CourseUpdate {
	type: CourseActions.COURSE_UPDATE;
	payload: Course;
}

export interface CourseDelete {
	type: CourseActions.COURSE_DELETE;
	id: string;
}

export interface CourseMessage {
	type: CourseActions.COURSE_MESSAGE;
	message: string;
}

export type CourseTypes =
	| CourseLoading
	| CourseSuccess
	| CourseErr
	| CourseAdd
	| CourseUpdate
	| CourseDelete
	| CourseMessage;

export interface SubjectLoading {
	type: SubjectActions.SUBJECT_LOADING;
}

export interface SubjectSuccess {
	type: SubjectActions.SUBJECT_SUCCESS;
	payload: Subject[];
}

export interface SubjectErr {
	type: SubjectActions.SUBJECT_ERR;
	payload: any;
}

export type SubjectTypes = SubjectLoading | SubjectSuccess | SubjectErr;

export interface TeacherLoading {
	type: TeacherActions.TEACHER_LOADING;
}

export interface TeacherSuccess {
	type: TeacherActions.TEACHER_SUCCESS;
	payload: Teacher[];
}

export interface TeacherErr {
	type: TeacherActions.TEACHER_ERR;
	payload: any;
}

export type TeacherTypes = TeacherLoading | TeacherSuccess | TeacherErr;

export type AppActionType = CourseTypes | SubjectTypes | TeacherTypes;
