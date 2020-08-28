import React from 'react';
import renderer from 'react-test-renderer';
import LandingPage from '../../components/landing-page/LandingPage/LandingPage';

it('корректно рендерит лендинг ликбез', () => {
	const tree = renderer.create(<LandingPage />).toJSON();
	expect(tree).toMatchSnapshot();
});
