export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61f3b33096a7cd7a826178f6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hyi7jrgg',
                  apiId: '674d6b66-fdaf-4de8-b59f-5622db329376'
                },
                {
                  buildHookId: '61f3b33074a4947f9e883bce',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3iv6ikdg',
                  apiId: 'c0794690-5810-4e54-98b5-7f589ccf403a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ermanjunaidi/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3iv6ikdg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
