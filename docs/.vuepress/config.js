module.exports = {
    title: '记录生活',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
      lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        {
          text: 'Feeling',
          items: [
            { text: '摆渡人', link: '/ferryPeople/'},
            { text: '活着', link: '/alive/'}
          ],
          collapsable: true
        },{
          text: 'JavaScript',
          items: [
            { text: '防抖', link: '/debounce/'}
          ],
          collapsable: true
        },{
          text: 'Photo',
          link: '/photo/'
        },{
          text: 'Other',
          items: [
            { text: '最新电影', link: '/newMovie/'}
          ]
        },{
          text: 'About',
          link: '/about/'
        },{
          text: 'GitHub',
          link: 'https://github.com/DragonflyCaptain'
        },{
          text: 'React',
          link: 'https://kairi1227.github.io/'
        }
      ],
      // lastUpdated: 'lastUpdated', // 最后更新
      // sidebar: [
      //   ['/', 'Home'],
      //   ['/ferryPeople/','摆渡人'],
      //   ['/alive/','活着']
      // ],
      search: false,            //取消搜索框
    }
  };