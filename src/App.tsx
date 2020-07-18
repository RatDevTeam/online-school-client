import React from 'react';
import './styles.scss';

import LandingPage from './components/landing-page/LandingPage/LandingPage';
import MainHeader from './components/MainHeader/MainHeader';
import MainFooter from './components/MainFooter/MainFooter';

const App: React.FC = () => (
	<>
		<MainHeader />
		<div className="main-block">
			<LandingPage />
		</div>
		<div style={{ flexShrink: 0 }}>
			<MainFooter />
		</div>
	</>
);

export default App;
