module.exports = {
    base: '/tione/',
    title: 'Tione UI',
    description: '这是一套易用的UI轮子',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: 'https://github.com/A-Tione/tione'},
            {text: '交流', link: 'https://google.com'},
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/collapse',
                    '/components/grid',
                    '/components/input',
                    '/components/layout',
                    '/components/popover',
                    '/components/tabs',
                    '/components/toast',
                ]
            }]
    }
};