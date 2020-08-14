import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../redux/store';

import TutorsPage from '../components/TutorsPage/TutorsPage';
import { AppActionType } from '../redux/actions/action.types';
import { getTeachers } from '../redux/actions/teacher.action';

const mapStateToProps = (state: AppState) => ({
	isTeachersError: state.teacherReducers.err,
	isTeachersLoading: state.teacherReducers.loading,
	teachers: state.teacherReducers.value,
});

const mapDispatchToProps = (
	dispatch: ThunkDispatch<any, any, AppActionType>
) => ({
	getTeachers: bindActionCreators(getTeachers, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TutorsPage);
