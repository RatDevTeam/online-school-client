import React, { lazy, Suspense } from 'react';
import './styles.scss';
import { useRouteNode } from 'react-router5';
import NotFoundPage from './components/utils/NotFoundPage';

import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';

const LandingPage = lazy(() =>
	import('./components/landing-page/LandingPage/LandingPage')
);
const TutorsPage = lazy(() => import('./containers/TutorsPage'));

const App: React.FC = () => {
	const { route } = useRouteNode('');
	const topRouteName = route.name.split('.')[0];

	const routing = () => {
		if (topRouteName === 'home') {
			return <LandingPage />;
		}
		if (topRouteName === 'tutors') {
			return <TutorsPage />;
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
