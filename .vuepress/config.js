module.exports = {
  title: 'پنل زرتشت',
  // description: 'Me',
  base: '/',

  head: [
    [
      'link',
      {
        href:
          'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,800,800i,900,900i',
        rel: 'stylesheet',
        type: 'text/css',
      },

    ],
      [
        'link',{
        href:
            'https://cdn.rawgit.com/rastikerdar/vazir-font/v19.0.0/dist/font-face.css',
        rel: 'stylesheet',
        type: 'text/css',
      },
      ]
  ],

  themeConfig: {
    repo: 'https://github.com/KarimQaderi/zoroaster-docs',
    // logo: '/assets/img/logo.svg',
    displayAllHeaders: true,
    sidebarDepth: 1,

    nav: [
      { text: 'مستندات', link: '/docs/1.0/installation.html' },
      { text: 'پکیج ها', link: '/packages.html' },
    ],

    sidebar: {
      '/docs/1.0/': require('./1.0'),
    },


    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'ویرایش این صفحه در GitHub'

  },

  plugins: ['@vuepress/last-updated']

}
