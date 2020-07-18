export interface TeacherReducer {
	loading: boolean;
	teachers: Teacher[];
	err: any;
}

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
