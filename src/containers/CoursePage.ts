import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../redux/store';
import { AppActionType } from '../redux/actions/action.types';
import { getCourses } from '../redux/actions/course.action';
import { getSubjects } from '../redux/actions/subject.action';
import { Course, CourseTypes } from '../schemas/course.schema';
import CoursePage from '../components/courses/CoursePage/CoursePage';
import { getTeachersByIds } from '../redux/actions/teacher.action';

const getMasterCourses = (courses: Course[]): Course[] =>
	courses.filter((course) => course.type === CourseTypes.MASTER);

const getSpecialCourse = (courses: Course[]): Course[] =>
	courses.filter((course) => course.type !== CourseTypes.MASTER);

const mapStateToProps = (state: AppState) => ({
	courses: state.courseReducers.value,
	specialCourses: getSpecialCourse(state.courseReducers.value),
	masterCourses: getMasterCourse(state.courseReducers.value),
	loadingCourses: state.courseReducers.loading,
	subjects: state.subjectReducers.value,
	teachers: state.teacherReducers.value,
});

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActionType>
) => ({
	getCourses: bindActionCreators(getCourses, dispatch),
	getSubjects: bindActionCreators(getSubjects, dispatch),
	getTeachersByIds: bindActionCreators(getTeachersByIds, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
