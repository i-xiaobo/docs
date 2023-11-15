module.exports = {
    title: 'XiaoBo&工作笔记',
    description: 'Just playing around',
    head: [
        ["link",{ 'rel': 'icon', 'href': '/favicon.ico' }],
        ['meta', { name:"author", content: "XiaoBo"}],
        ["meta", { name:"keywords", content: "vuepress 介绍, vuepress 说明，我的工作笔记"}],
    ],

    plugins: [
        ["vuepress-plugin-auto-sidebar", {
          // options
        }]
    ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        // 最后更新时间
        lastUpdated: '更新时间', // string | boolean
        // 页面滚动
        smoothScroll: true,
        // 自动生成侧边栏
        // sidebar: 'auto',
        // 导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/about/' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            {
                text: 'docker',
                items: [
                  { text: '创建', items: [
                    { text: '创建容器', link: '/docker/build' },
                    { text: 'Guide', link: '/about/' },
                  ] },
                  { text: 'Group2', items: [
                    { text: 'Home', link: '/' },
                    { text: 'Guide', link: '/about/' },
                  ] }
                ]
            }
        ],
        
    },
}