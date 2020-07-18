import React from 'react';
import './styles.scss';

import { useRouteNode } from 'react-router5';
import LandingPage from './components/landing-page/LandingPage/LandingPage';
import NotFoundPage from './components/utils/NotFoundPage';
import CoursePage from './containers/CoursePage';
import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';
import StudentPage from './components/student-account/StudentPage/StudentPage';

const App: React.FC = () => {
	const { route } = useRouteNode('');
	const topRouteName = route.name.split('.')[0];

	const routing = () => {
		if (topRouteName === 'home') {
			return <LandingPage />;
		}
		if (topRouteName === 'courses') {
			return <CoursePage />;
		}
		if (topRouteName === 'student') {
			return <StudentPage />;
		}
		return <NotFoundPage />;
	};

	return (
		<>
			<MainHeader />
			<div className="main-block">{routing()}</div>
			<div style={{ flexShrink: 0 }}>
				<MainFooter />
			</div>
		</>
	);
};

export default App;
