// src/data/forumData.js

export const forumData = {
  posts: [
    {
      id: 1,
      author: "Carlos Silva",
      authorAvatar: "CS",
      authorRole: "Engenheiro Eletrônico",
      date: "15 maio, 2026",
      content: "Estou iniciando um projeto com ESP32 para automação residencial. Alguém tem experiência com comunicação MQTT? Quais bibliotecas vocês recomendam para conectar sensores de temperatura e umidade?",
      likes: 15,
      tags: ["ESP32", "MQTT", "Automação"],
      replies: [
        {
          id: 1,
          author: "Ana Rodrigues",
          authorAvatar: "AR",
          authorRole: "Desenvolvedora IoT",
          date: "15 maio, 2026",
          content: "Carlos, recomendo a biblioteca PubSubClient para MQTT. Para sensores DHT22, uso a DHT sensor library da Adafruit. Tenho um exemplo funcional se quiser!"
        },
        {
          id: 2,
          author: "Pedro Mendes",
          authorAvatar: "PM",
          authorRole: "Hobbista",
          date: "15 maio, 2026",
          content: "Concordo com a Ana. Também vale olhar o ESP-MQTT da Espressif. E cuidado com a latência se for muitos dispositivos!"
        }
      ]
    },
    {
      id: 2,
      author: "Mariana Costa",
      authorAvatar: "MC",
      authorRole: "Estudante de Engenharia",
      date: "14 maio, 2026",
      content: "Qual a diferença prática entre Arduino Uno, Nano e Mega para projetos educacionais? Quero ensinar robótica para crianças e preciso de uma placa versátil.",
      likes: 23,
      tags: ["Arduino", "Educação", "Robótica"],
      replies: [
        {
          id: 1,
          author: "Ricardo Lima",
          authorAvatar: "RL",
          authorRole: "Professor",
          date: "14 maio, 2026",
          content: "Para ensino, recomendo o Uno! Tem bastante material online, é mais robusto para mãos pequenas. O Nano é mais compacto e o Mega só necessário se precisar de muitos sensores."
        }
      ]
    },
    {
      id: 3,
      author: "Lucas Ferreira",
      authorAvatar: "LF",
      authorRole: "Desenvolvedor Full Stack",
      date: "13 maio, 2026",
      content: "Dica para quem está começando com Raspberry Pi Pico: MicroPython é muito mais amigável que C++ para prototipagem rápida. Consegui fazer um controle de LED RGB funcionar em 10 minutos! Alguém mais prefere MicroPython?",
      likes: 42,
      tags: ["Raspberry Pi", "MicroPython", "Dica"],
      replies: []
    },
    {
      id: 4,
      author: "Juliana Santos",
      authorAvatar: "JS",
      authorRole: "Engenheira de Software",
      date: "12 maio, 2026",
      content: "Estou com problemas de interferência em leitura analógica no Arduino. Meu sensor de distância dá valores flutuantes mesmo parado. Já tentei capacitor no pino e média móvel, mas persiste. Ideias?",
      likes: 8,
      tags: ["Arduino", "Sensores", "Interferência"],
      replies: [
        {
          id: 1,
          author: "Fernando Augusto",
          authorAvatar: "FA",
          authorRole: "Engenheiro Eletrônico",
          date: "12 maio, 2026",
          content: "Tente usar resistor pull-down de 10k e um filtro passa-baixa RC. Se persistir, pode ser ruído na alimentação - use fonte externa isolada."
        }
      ]
    }
  ],
  siteInfo: {
    name: "MicroWiki",
    description: "Discussões sobre microcontroladores, componentes e sistemas embarcados",
    icon: "Cpu"
  }
};

// Função auxiliar para buscar post por ID
export const getPostById = (id) => {
  return forumData.posts.find(post => post.id === id);
};

// Função auxiliar para buscar posts por tag
export const getPostsByTag = (tag) => {
  return forumData.posts.filter(post => post.tags.includes(tag));
};

// Função auxiliar para buscar posts por autor
export const getPostsByAuthor = (author) => {
  return forumData.posts.filter(post => post.author === author);
};