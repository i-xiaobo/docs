const headConf = require('./config/headConf.js');
const pluginsConf = require('./config/pluginsConf.js');
const navConf = require('./config/navConf.js');

module.exports = {
    // base: "/docs/",
    title: '我の工作笔记',
    description: 'Just playing around',
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        logo: 'avatar.jpg',

        // 最后更新时间
        lastUpdated: '更新时间', // string | boolean

        // 页面滚动
        smoothScroll: true,

        // 导航栏
        nav: navConf,
        
        // 自动生成侧边栏
        // sidebar: 'auto',
    },
}