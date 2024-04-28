const CONTEXT_API = 'Context API';

const translations = {
  en: {
    title: 'Projects',
    subTitle: 'Works done',
  },
  pt: {
    title: 'Projetos',
    subTitle: 'Trabalhos realizados',
  },
  projects: [
    {
      image: '/trybe_football.jpg',
      title: 'Football Club',
      github: 'https://github.com/feroddev/footballclub',
      category: 'Backend',
      technologies: [
        'Node.js',
        'Express',
        'MySQL',
        'Sequelize',
        'POO',
        'JWT',
        'Docker',
        'REST API',
        'Typescript',
      ],
      synopsisPT: 'Um sistema de gerenciamento de tabela de um campeonato de futebol.',
      synopsisEN: 'A football championship table management system.',
    }, {
      image: '/blog_api.jpg',
      title: 'Blogs API',
      github: 'https://github.com/feroddev/blogs-api',
      category: 'Backend',
      technologies: [
        'Node.js',
        'Express',
        'MySQL',
        'Sequelize',
        'JWT',
        'Docker',
        'REST API',
      ],
      synopsisPT: 'Uma API de gerenciamento de blogs.',
      synopsisEN: 'A blog management API.',
    }, {
      image: '/trybetunes.jpg',
      title: 'TrybeTunes',
      github: 'https://github.com/feroddev/trybetunes',
      site: 'https://trybetunes-sandy.vercel.app/',
      category: 'Frontend',
      technologies: [
        'React',
        'Redux',
        'Bootstrap',
        CONTEXT_API,
        'Hooks',
        'RTL',
      ],
      synopsisPT: 'Um site/aplicativo de músicas.',
      synopsisEN: 'A music website/app.',
    }, {
      image: '/recipes_app.jpg',
      title: 'Recipes APP',
      github: 'https://github.com/alinelimasl/RecipesApp',
      site: 'https://recipes-app-tan-six.vercel.app/',
      category: 'Frontend',
      technologies: [
        'React',
        'Hooks',
        CONTEXT_API,
        'RTL',
        'Typescript',
        'SaaS',
      ],
      synopsisPT: 'Um site de receitas.',
      synopsisEN: 'A recipes website.',
    }, {
      image: '/notable_news.jpg',
      title: 'Notable News',
      github: 'https://github.com/feroddev/projeto-noticias-notaveis',
      site: 'https://projeto-noticias-notaveis.vercel.app/',
      category: 'Frontend',
      technologies: [
        'React',
        'Hooks',
        CONTEXT_API,
        'RTL',
        'Typescript',
      ],
      synopsisPT: 'Um site de notícias.',
      synopsisEN: 'A news website.',
    },
  ],
};

export default translations;
