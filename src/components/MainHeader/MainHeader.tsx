import React from 'react';
import './style.scss';
/*
 * Шапка для главной страницы
 */
const MainHeader: React.FC = () => (
	<header className="header">
		<div className="header__title" id="header">
			<h2>
				Лик<span className="header__title__color-text">Б</span>ез
			</h2>
		</div>
	</header>
);

export default MainHeader;
