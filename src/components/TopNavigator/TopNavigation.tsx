import * as React from 'react';
import './styles.scss';

export interface MenuList {
	id: number;
	title: string;
	page: number;
}

interface ITopNavigation {
	menuList: MenuList[];
	page: number;
	changePage: (i: number) => void;
}

const TopNavigation: React.FC<ITopNavigation> = ({
																									 menuList,
																									 page,
																									 changePage,
																								 }) => {
	return (
		<div className="top-navigation">
			{menuList.map((block) => (
				<div
					className={
						page === block.page
							? 'top-navigation__tab active'
							: 'top-navigation__tab'
					}
					role="button"
					tabIndex={0}
					onClick={() => changePage(block.page)}
					onKeyDown={() => changePage(block.page)}
				>
					<span>{block.title}</span>
				</div>
			))}
		</div>
	);
};

export default TopNavigation;
