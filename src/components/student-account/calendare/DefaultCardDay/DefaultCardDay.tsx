import * as React from 'react';
import { Box, Text } from 'grommet';

interface IDefaultCardDay {
	today?: boolean;
}

const DefaultCardDay: React.FC<IDefaultCardDay> = ({ today }) => (
	<Box direction="column" height="100%" align="start" justify="start" pad="5px">
		<Box
			round="full"
			background={today ? 'brand' : undefined}
			width="35px"
			height="35px"
			align="center"
			justify="center"
		>
			<Text color={!today ? 'status-unknown' : undefined}>15</Text>
		</Box>
	</Box>
);

export default DefaultCardDay;
