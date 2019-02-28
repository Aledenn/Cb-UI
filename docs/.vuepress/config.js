module.exports = {
	title: 'Cb-UI',
	base: '/Cb-UI/',
	description: '一个简单易用的UI框架',
	themeConfig: {
		nav: [
			{ text: '主页', link: '/' },
			{ text: 'Github', link: 'https://github.com/Aledenn/Cb-UI' },
			{ text: '交流', link: 'https://github.com/Aledenn/Cb-UI/issues' }
		],
		sidebar: [
			'/introduce/',
			'/install/',
			'/quick-start/',
			{
				title: '组件',
				children: [
					'/components/icon',
					'/components/button',
					'/components/input',
					'/components/layout',
					'/components/grid'
				]
			}
		]
	}
}
