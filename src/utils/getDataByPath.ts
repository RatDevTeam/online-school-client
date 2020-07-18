import { Store } from '../redux/store';
import { getCourses } from '../redux/actions/course.action';
import { getSubjects } from '../redux/actions/subject.action';

export default (path: string) => {
	if (path.includes('course')) {
		Store.dispatch(getCourses());
		Store.dispatch(getSubjects());
	}
};
