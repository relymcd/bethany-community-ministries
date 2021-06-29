export default {
  widgets: [
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
                  buildHookId: '60da952e43a71430ad445c5b',
                  title: 'Sanity Studio',
                  name: 'bethany-community-ministries-studio',
                  apiId: '47e20f86-5101-41d4-a382-c9a575e44e4d'
                },
                {
                  buildHookId: '60da952e684b692f65d93938',
                  title: 'Blog Website',
                  name: 'bethany-community-ministries',
                  apiId: '81f4e84a-9ab5-491f-a718-b4b0e772bff5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/relymcd/bethany-community-ministries',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bethany-community-ministries.netlify.app', category: 'apps'}
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
