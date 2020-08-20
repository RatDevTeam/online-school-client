import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router5';
import { Menu } from 'grommet-icons';
import { getMainMenuList } from '../../utils';
/*
 * Шапка для главной страницы
 */
const MainHeader: React.FC = () => {
	const [rightClass, setRightClass] = useState<string[]>(['header__right']);
	const menu = getMainMenuList(false);
	return (
		<header
			className="header"
			onMouseLeave={() => setRightClass(['header__right'])}
		>
			<Link routeName="home">
				<div className="header__title" id="header" />
			</Link>
			<span className="header__icon-menu" role="button" tabIndex={0}>
				<Menu size="30px" color="#000000" />
			</span>
			<div className={rightClass.join(' ')}>
				<nav>
					<ul className="header__right__menu">
						{menu.map((item) => (
							<li>
								<Link routeName={item.routerName} key={item.id}>
									<span>{item.label}</span>
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default MainHeader;
