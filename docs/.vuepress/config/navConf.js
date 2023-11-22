module.exports = [
  { text: '首页', link: '/' },

  { text: 'Java 核心基础', items: [
    { text: '核心',      link: '/java/' },
    { text: '基础语法', link: '/java/1/base' },
    { text: '面向对象', link: '/java/1/build' },
    { text: '数据类型', link: '/java/1/' },
    { text: 'IO', link: '/java/1/' },
    { text: '反射', link: '/java/1/' },
    { text: '异常', link: '/java/1/' },
  ] },
  {
    text: '数据库',
    items: [
      { text: 'MySQL', items: [
        { text: '语法',      link: '/' },
        { text: '事务',      link: '/about/' },
        { text: '索引',      link: '/about/' },
        { text: '锁', link: '/about/' },
        { text: '分库分表',      link: '/about/' }
      ] },
      { text: 'PG', items: [
        { text: 'datagrid创建数据库',      link: '/db/pg/create' },
      ] },
      { text: 'clickhouse', items: [
        { text: '语法',      link: '/' },
        { text: '事务',      link: '/about/' },
        { text: '索引',      link: '/about/' },
        { text: '锁', link: '/about/' },
        { text: '分库分表',      link: '/about/' }
      ] },
    ]
  },
  
  {
    text: 'Java实战',
    items: [
      { text: 'Java Web 基础+实战', items: [
        { text: '语法',      link: '/' },
        { text: '事务',      link: '/about/' },
      ] },
      { text: 'Java开发框架', items: [
        { text: 'maven',      link: '/' },
        { text: 'git',      link: '/about/' },
        { text: 'ssm',      link: '/about/' },
        { text: 'Spring', link: '/about/' },
        { text: 'mybatis',      link: '/about/' },
        { text: 'springMVC',      link: '/about/' },
        { text: 'Springboot',      link: '/about/' }
      ] },
      { text: '中间件&服务框架', items: [
        { text: 'springcloud',      link: '/' },
        { text: 'dubbo',      link: '/about/' },
        { text: 'zookeeper',      link: '/about/' },
        { text: 'rabbitMQ', link: '/about/' },
        { text: 'kafka',      link: '/about/' },
        { text: 'docker',      link: '/about/' },
        { text: 'redis',      link: '/about/' },
        { text: 'elasticSearch',      link: '/about/' }
      ] },
      { text: '企业级项目实战', items: [
        { text: 'springcloud',      link: '/' },
      ] },
    ]
  },
  {
      text: 'Docker',
      items: [
        { text: '配置', items: [
          { text: '配置',      link: '/' },
          { text: '创建镜像/容器', link: '/docker/conf/build' },
          { text: '安装docker-compose', link: '/docker/conf/docker-compose' },
          { text: '离线安装docker', link: '/docker/conf/docker' },
          { text: '离线打包镜像', link: '/docker/conf/image' },
          { text: '容器/主机文件拷贝', link: '/docker/conf/copy' },
        ] },
        { text: '部署', items: [
          { text: '部署',      link: '/' },
          { text: 'docker-compose部署nginx',      link: '/docker/pub/nginx' },
          { text: 'docker-compose部署redis',      link: '/docker/pub/redis' },
          { text: 'docker-compose部署mysql',      link: '/docker/pub/mysql' },
          { text: 'docker-compose部署clickhouse', link: '/docker/pub/clickhouse' },
          { text: 'docker-compose部署kafka',      link: '/docker/pub/kafka' },
          { text: 'docker-compose部署zookeeper',  link: '/docker/pub/zookeeper' },
          { text: 'docker-compose部署java',       link: '/docker/pub/java' },
          { text: 'docker-compose部署接口服务',    link: '/docker/pub/admin' },
        ] }
      ]
  },
  {
      text: 'Linux',
      ariaLabel: 'Language Menu',
      items: [
        { text: '开放端口号',    link: '/linux/port' },
        { text: '常用命令',      link: '/linux/public' },
        { text: '网络配置',      link: '/linux/network' },
        { text: '安装telnet',    link: '/linux/telnet' },
        { text: 'tar命令',      link: '/linux/tar' }
      ]
  },
  {
      text: '地图',
      items: [
        { text: '配置', items: [
          { text: '配置',      link: '/' },
          { text: '离线地图', link: '/map/index' },
        ] },
      ]
  },
  {
      text: '随笔',
      ariaLabel: 'Language Menu',
      items: [
        { text: 'Chinese', link: '/language/chinese/' },
        { text: 'Japanese', link: '/language/japanese/' }
      ]
  },
  {
    text: 'Spring',
    ariaLabel: 'Language Menu',
    items: [
      { text: 'Chinese', link: '/language/chinese/' },
      { text: 'Japanese', link: '/language/japanese/' }
    ]
  },
  {
    text: '中间件',
    ariaLabel: 'Language Menu',
    items: [
      { text: 'Chinese', link: '/language/chinese/' },
      { text: 'Japanese', link: '/language/japanese/' }
    ]
  },
]