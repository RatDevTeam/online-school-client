export default [
	{ name: 'home', path: '/home' },
	{ name: 'admin', path: '/admin' },
	{ name: 'login', path: '/login' },
	{ name: 'registration', path: '/registration' },
	{
		name: 'courses',
		path: '/courses',
		children: [
			{ name: 'list', path: '/' },
			{ name: 'course', path: '/:id' },
		],
	},
	{
		name: 'student',
		path: '/student',
		children: [
			{ name: 'courses', path: '/courses' },
			{ name: 'scripts', path: '/scripts' },
			{ name: 'home', path: '/home-work' },
		],
	},
];
