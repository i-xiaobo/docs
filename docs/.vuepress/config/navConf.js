module.exports = [
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
]