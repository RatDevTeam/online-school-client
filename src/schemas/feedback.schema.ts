import React from 'react';

export interface FeedbackSchema {
	name: string;
	feedback: string;
	imgUrl: string;
	customStyle?: React.CSSProperties;
}
