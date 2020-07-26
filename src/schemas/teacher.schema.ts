import { Reducer } from './reducer.schema';

export interface TeacherReducer extends Reducer<Teacher[]> {}

export class Teacher implements ITeacher {
	name: string;

	description: string;

	imgUrl: string;

	vkUrl: string;

	constructor(
		name: string,
		description: string,
		imgUrl: string,
		vkUrl: string
	) {
		this.name = name;
		this.description = description;
		this.imgUrl = imgUrl;
		this.vkUrl = vkUrl;
	}
}

export interface ITeacher {
	name: string;
	description: string;
	imgUrl: string;
	vkUrl: string;
}
