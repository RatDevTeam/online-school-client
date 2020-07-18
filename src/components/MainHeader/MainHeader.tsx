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
	const menu = getMainMenuList(true);
	const onClickIconMenu = () => {
		if (rightClass.includes('active')) {
			setRightClass(['header__right']);
		} else {
			setRightClass([...rightClass, 'active']);
		}
	};
	return (
		<header
			className="header"
			onMouseLeave={() => setRightClass(['header__right'])}
		>
			<div className="header__title" id="header">
				<h2>
					Лик<span className="header__title__color-text">Б</span>ез
				</h2>
			</div>
			<span
				className="header__icon-menu"
				role="button"
				tabIndex={0}
				onClick={() => onClickIconMenu()}
				onKeyDown={() => onClickIconMenu()}
			>
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
								{item.submenu ? (
									<ul className="header__right__submenu">
										{item.submenu.map((subItem) => (
											<li>
												<Link routeName={subItem.routerName} key={subItem.id}>
													{subItem.label}
												</Link>
											</li>
										))}
									</ul>
								) : null}
							</li>
						))}
					</ul>
				</nav>
				<button
					type="button"
					className="ui-button"
					style={{ background: 'red' }}
				>
					Войти
				</button>
			</div>
		</header>
	);
};

export default MainHeader;
