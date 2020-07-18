import * as React from 'react';
import './styles.scss';
import { Anchor } from 'grommet';
import { Instagram, FacebookOption, LinkUp } from 'grommet-icons';

/*
 * Подвал для главной страницы
 */

const MainFooter: React.FC = () => (
	<footer className="footer-container">
		<div className="footer-container__left">
			<a href="#header">
				<LinkUp />
			</a>
			<div className="footer-container__left__title">
				<p>
					<b>ЛикБез</b> платформа для обучения
				</p>
			</div>
		</div>
		<div className="footer-container__center">
			<Anchor
				a11yTitle="Share feedback on Github"
				href="https://www.instagram.com/"
				icon={<Instagram color="brand" />}
			/>
			<Anchor
				a11yTitle="Chat with us on Slack"
				href="https://www.facebook.com/"
				icon={<FacebookOption color="brand" />}
			/>
		</div>
		<div className="footer-container__right">
			<p>© Copyright 2020</p>
		</div>
	</footer>
);
export default MainFooter;
