import React, { lazy, Suspense } from 'react';
import './styles.scss';

import { useRouteNode } from 'react-router5';
const LandingPage = lazy(() =>
	import('./components/landing-page/LandingPage/LandingPage')
);
import NotFoundPage from './components/utils/NotFoundPage';
const CoursePage = lazy(() => import('./containers/CoursePage'));
import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';
const StudentPage = lazy(() =>
	import('./components/student-account/StudentPage/StudentPage')
);

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
			<div className="main-block">
				<Suspense fallback={<div>Загрузка...</div>}>{routing()}</Suspense>
			</div>
			<div style={{ flexShrink: 0 }}>
				<MainFooter />
			</div>
		</>
	);
};

export default App;
