import React, { useState } from 'react';
import { Box, Button, Text, Nav } from 'grommet';
import { Configure, Book, Trophy, Money } from 'grommet-icons';

interface IMenuItem {
	label: string;
	icon: string;
	[x: string]: any;
}
const drawIcon = (icon: string) => {
	const CustomIcon = icon;
	return <CustomIcon />;
};
const menuList = [
	{ label: 'Курсы', icon: 'Book' },
	{ label: 'Достижения', icon: 'Trophy' },
	{ label: 'Оплата', icon: 'Money' },
	{ label: 'Настройки', icon: 'Configure' },
];
const SideBarItem: React.FC<IMenuItem> = ({ label, icon, ...props }) => (
	// eslint-disable-next-line react/jsx-props-no-spreading
	<Button plain {...props}>
		{({ hover }: { hover: boolean }) => (
			<Box
				background={hover ? 'accent-1' : undefined}
				pad={{ horizontal: 'large', vertical: 'medium' }}
			>
				{drawIcon(icon)}

				<Text size="large">{label}</Text>
			</Box>
		)}
	</Button>
);

interface ISideBar {}
const SideBar: React.FC<ISideBar> = () => {
	const [active, setActive] = useState();
	return (
		<Box fill direction="row">
			<Nav background="light-1">
				{menuList.map((item) => (
					<SideBarItem
						key={item.label}
						icon={item.icon}
						label={item.label}
						active={item.label === active}
						onClick={() => setActive(item.label)}
					/>
				))}
			</Nav>
		</Box>
	);
};
export default SideBar;
