import projectIcons from '../../assets/project-images'

const projetcts = [
  {
    name: 'Pixel Art Project',
    image: projectIcons.desktop,
    tecnologies: ['react', 'sass', 'javascript'],
    description: 'Um editor de pixel artes, minha primeira experiencia individual com React e Sass.',
    destaque: false,
    link: 'https://github.com/PedroSehn/pixel-art-project',
  },
  {
    name: 'Instagram Clone',
    image: projectIcons.desktop,
    tecnologies: ['react', 'sass', 'javascript'],
    description: 'Um clone do feed do Instagram, um projeto que eu me orgulho do resultado.',
    destaque: true,
    link: 'https://github.com/PedroSehn/instagram-clone',
  },
  {
    name: 'Mongo Aggregations',
    image: projectIcons.backend,
    tecnologies: ['mongodb', 'javascript'],
    description: 'Meu primeiro contato com Mongodb.',
    destaque: false,
    link: 'https://github.com/PedroSehn/Mongo_Aggregations',
  },
  {
    name: 'Store Manager',
    image: projectIcons.backend,
    tecnologies: ['mysql', 'express'],
    description: 'Meu primeiro projeto em MySQL, simula a adiministração de uma loja.',
    destaque: false,
    link: 'https://github.com/PedroSehn/Store_Manager',
  },
  {
    name: 'DataFlights',
    image: projectIcons.backend,
    tecnologies: ['mongodb'],
    description: 'Primieiro projeto em Mongodb, simula a adiministração de um aeroporto.',
    destaque: false,
    link: 'https://github.com/PedroSehn/DataFlights_MongoDB',
  },
  {
    name: 'Blogs API',
    image: projectIcons.backend,
    tecnologies: ['sequelize', 'mysql', 'express'],
    description: 'Um projeto utilizando Sequelize, simula a administração de uma rede social.',
    destaque: true,
    link: 'https://github.com/PedroSehn/Blogs-API',
  },
  {
    name: 'Pokedex',
    image: projectIcons.desktop,
    tecnologies: ['react', 'sass', 'javascript'],
    describe: 'Um projeto que lista todos os pokemons dá API "PokeAPI"',
    destaque: true,
    link: 'https://github.com/PedroSehn/Pokedex',
  },
  {
    name: 'Dungeons & Dragons',
    image: projectIcons.mobile,
    tecnologies: ['typescript'],
    describe: 'Um projeto que simula um jogo de RPG em Typescript',
    destaque: true,
    link: 'https://github.com/PedroSehn/TypeScript---Dungeons-Dragons',
  },
  {
    name: 'Football Club DB',
    image: projectIcons.backend,
    tecnologies: ['typescript', 'docker', 'sequelize'],
    destaque: true,
    link: 'https://github.com/PedroSehn/Football_Club_DB',
  }
];

export default projetcts;