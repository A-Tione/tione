module.exports = {
    base: '/tione/',
    title: 'Tione UI',
    description: '一套为开发者学习准备的基于 Vue 2.0 的移动端和 PC 端组件库',
    markdown: {
        lineNumbers: true
    },

    themeConfig: {
        repo: 'zyqq/wheel',// 默认是 false, 设置为 true 来启用
        lastUpdated: 'Last Updated',
        // editLinks: true,
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