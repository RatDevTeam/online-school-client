import * as React from 'react';
import './styles.scss';
import { useRoute } from 'react-router5';

export interface MenuList {
	id: number;
	title: string;
	linkName: string;
}

interface ITopNavigation {
	menuList: MenuList[];
}

const TopNavigation: React.FC<ITopNavigation> = ({ menuList }) => {
	const { route, router } = useRoute();

	return (
		<div className="top-navigation">
			{menuList.map((block) => (
				<div
					className={
						route.name === block.linkName
							? 'top-navigation__tab active'
							: 'top-navigation__tab'
					}
					role="button"
					tabIndex={0}
					onClick={() => router.navigate(block.linkName)}
					onKeyDown={() => router.navigate(block.linkName)}
				>
					<span>{block.title}</span>
				</div>
			))}
		</div>
	);
};

export default TopNavigation;
