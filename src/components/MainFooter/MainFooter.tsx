import * as React from 'react';
import './styles.scss';
import { Instagram, LinkUp } from 'grommet-icons';

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
			<a href="https://www.instagram.com/likbez_online/">
				<Instagram color="brand" />
			</a>
		</div>
		<div className="footer-container__right">
			<p>© Copyright 2020</p>
		</div>
	</footer>
);
export default MainFooter;
