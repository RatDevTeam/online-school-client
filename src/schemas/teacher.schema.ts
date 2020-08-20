import { Reducer } from './reducer.schema';
import { Subject } from './subject.schema';

export interface TeacherReducer extends Reducer<Teacher[]> {}

export class Teacher implements ITeacher {
	name: string;

	description: string;

	imgUrl: string;

	vkUrl: string;

	subject: Subject;

	constructor(
		name: string,
		description: string,
		imgUrl: string,
		vkUrl: string,
		subject: Subject
	) {
		this.name = name;
		this.description = description;
		this.imgUrl = imgUrl;
		this.vkUrl = vkUrl;
		this.subject = subject;
	}
}

export interface ITeacher {
	name: string;
	description: string;
	imgUrl: string;
	vkUrl: string;
	subject?: Subject;
}
