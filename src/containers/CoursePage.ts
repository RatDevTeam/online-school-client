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

const getMasterCourse = (courses: Course[]) =>
	courses.find((course) => course.type === CourseTypes.MASTER);

const getSpecialCourse = (courses: Course[]) => {
	return courses.filter((course) => course.type !== CourseTypes.MASTER);
};

const mapStateToProps = (state: AppState) => ({
	courses: state.courseReducers.courses,
	specialCourses: getSpecialCourse(state.courseReducers.courses),
	masterCourse: getMasterCourse(state.courseReducers.courses),
	loadingCourses: state.courseReducers.loading,
	subjects: state.subjectReducers.subjects,
	teachers: state.teacherReducers.teachers,
});

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActionType>
) => ({
	getCourses: bindActionCreators(getCourses, dispatch),
	getSubjects: bindActionCreators(getSubjects, dispatch),
	getTeachersByIds: bindActionCreators(getTeachersByIds, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
