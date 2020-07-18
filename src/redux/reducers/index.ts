import { combineReducers } from 'redux';
import courseReducers from './course.reducer';
import subjectReducers from './subject.reducer';
import teacherReducers from './teacher.reducer';

export default combineReducers({
	courseReducers,
	subjectReducers,
	teacherReducers,
});
