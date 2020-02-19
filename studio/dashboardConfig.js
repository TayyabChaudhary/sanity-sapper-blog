export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e4cc93b0a83e446ed44e280',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-9wgvz9ft',
                  apiId: '953b45e8-49e7-49cf-8d2c-bf0e1719228d'
                },
                {
                  buildHookId: '5e4cc93b28af2238c284c662',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-nsqp7zrq',
                  apiId: '9fd69191-a5f5-4ac0-8e29-189b781e9c8c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TayyabChaudhary/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-nsqp7zrq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
