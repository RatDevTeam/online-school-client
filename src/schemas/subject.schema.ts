export interface SubjectReducer {
	loading: boolean;
	subjects: Subject[];
	err: any;
}

export class Subject implements ISubject {
	_id: string;

	title: string;

	color: string;

	type: string;

	constructor({ _id, title, color, type }: ISubject) {
		this._id = _id;
		this.color = color;
		this.title = title;
		this.type = type;
	}
}

export interface ISubject {
	_id: string;
	title: string;
	color: string;
	type: string;
}
