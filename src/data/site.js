// Campos com { en, pt } são textos traduzidos. Os demais valem para os dois idiomas.
export const perfil = {
  nome: 'Juarez Monteiro',
  cargo: {
    en: 'AI Researcher and Data Scientist',
    pt: 'Pesquisador em IA e Cientista de Dados',
  },
  bio: {
    en: 'Ph.D. in Computer Science from PUCRS. I research imitation learning, reinforcement learning, foundation models for tabular data and generative AI. I work in industry as a researcher and data scientist.',
    pt: 'Doutor em Ciência da Computação pela PUCRS. Pesquisa aprendizado por imitação, aprendizado por reforço, modelos fundacionais para dados tabulares e IA generativa. Atua na indústria como pesquisador e cientista de dados, e como professor.',
  },
  sobre: {
    en: [
      "I'm an AI researcher and data scientist from Brazil. My research sits at the intersection of imitation learning, reinforcement learning, and foundation models for tabular data.",
      'In the ASK line, I study when a reinforcement learning agent should ask a language model for help, using uncertainty to decide. In imitation learning, I work on learning policies from observation alone. In health data, I develop methods to synthesize patient records that respect medical knowledge.',
      'At Dell Technologies, I work as an AI researcher and data scientist. I also teach, and I have taught courses in machine learning, deep learning, and data science. I am currently pursuing an MBA in Leadership, Team Management and Productivity at PUCRS.',
    ],
    pt: [
      'Sou pesquisador de IA e cientista de dados, do Brasil. Minha pesquisa fica na interseção entre aprendizado por imitação, aprendizado por reforço e modelos fundacionais para dados tabulares.',
      'Na linha ASK, estudo quando um agente de aprendizado por reforço deve pedir ajuda a um modelo de linguagem, usando a incerteza para decidir. Em imitação, trabalho com políticas aprendidas apenas a partir de observação. Em dados de saúde, desenvolvo métodos para sintetizar prontuários que respeitam o conhecimento médico.',
      'Na Dell Technologies atuo como pesquisador de IA e cientista de dados. Também sou professor, já ministrei disciplinas de machine learning, deep learning e ciência de dados. Atualmente faço o MBA em Liderança, Gestão de Equipes e Produtividade na PUCRS.',
    ],
  },
  foto: '/img/photo.jpg',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juarez-monteiro/' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=LVhKmIIAAAAJ&hl=en' },
    { label: 'YouTube', href: 'https://www.youtube.com/@jrzmonteiro' },
    { label: 'GitHub', href: 'https://github.com/jrzmnt' },
  ],
}

export const formacao = [
  {
    grau: {
      en: 'MBA in Leadership, Team Management and Productivity',
      pt: 'MBA em Liderança, Gestão de Equipes e Produtividade',
    },
    instituicao: {
      en: 'PUCRS, Pontifical Catholic University of Rio Grande do Sul',
      pt: 'PUCRS, Pontifícia Universidade Católica do Rio Grande do Sul',
    },
    periodo: { en: 'Jul 2026 – present', pt: 'jul. 2026 – em andamento' },
  },
  {
    grau: { en: 'Ph.D. in Computer Science', pt: 'Doutorado em Ciência da Computação' },
    instituicao: {
      en: 'PUCRS, Pontifical Catholic University of Rio Grande do Sul',
      pt: 'PUCRS, Pontifícia Universidade Católica do Rio Grande do Sul',
    },
    periodo: { en: '2018 – 2023', pt: '2018 – 2023' },
    tese: 'Advances in Imitation Learning from Observation',
    pdf: '/docs/thesis.pdf',
  },
  {
    grau: { en: 'M.Sc. in Computer Science', pt: 'Mestrado em Ciência da Computação' },
    instituicao: {
      en: 'PUCRS, Pontifical Catholic University of Rio Grande do Sul',
      pt: 'PUCRS, Pontifícia Universidade Católica do Rio Grande do Sul',
    },
    periodo: { en: '2016 – 2018', pt: '2016 – 2018' },
    tese: 'Evaluating the feasibility of deep learning for action recognition in small datasets',
    pdf: '/docs/dissertation.pdf',
  },
  {
    grau: {
      en: 'Associate Degree in Systems Analysis and Development',
      pt: 'Técnico em Análise e Desenvolvimento de Sistemas',
    },
    instituicao: {
      en: 'IFRS, Federal Institute of Education, Science and Technology of Rio Grande do Sul',
      pt: 'IFRS, Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Sul',
    },
    periodo: { en: '2011 – 2014', pt: '2011 – 2014' },
    tese: 'Analysis of the Applicability of Artificial Intelligence Techniques in a Digital Game: An Approach with Intelligent Agents',
    pdf: '/docs/final_project.pdf',
  },
]

export const experienciaIndustria = [
  {
    cargo: { en: 'AI Researcher and Data Scientist', pt: 'Pesquisador de IA e Cientista de Dados' },
    empresa: 'Dell Technologies',
    periodo: { en: 'Jul 2023 – present', pt: 'jul. 2023 – atual' },
  },
  {
    cargo: { en: 'Data Scientist', pt: 'Cientista de Dados' },
    empresa: 'Sicredi',
    periodo: { en: 'May 2022 – Sep 2023', pt: 'mai. 2022 – set. 2023' },
  },
  {
    cargo: { en: 'ML Engineer', pt: 'Engenheiro de ML' },
    empresa: 'unico IdTech',
    periodo: { en: 'Nov 2021 – Apr 2022', pt: 'nov. 2021 – abr. 2022' },
  },
  {
    cargo: { en: 'Intern – Software Developer', pt: 'Estagiário – Desenvolvedor de Software' },
    empresa: 'CWI Software',
    periodo: { en: 'Apr 2015 – Sep 2015', pt: 'abr. 2015 – set. 2015' },
  },
  {
    cargo: { en: 'Intern – Performance Tester', pt: 'Estagiário – Testes de Performance' },
    empresa: 'Dell Technologies',
    periodo: { en: 'Dec 2013 – Feb 2015', pt: 'dez. 2013 – fev. 2015' },
  },
  {
    cargo: { en: 'Intern – Service Reports', pt: 'Estagiário – Relatórios de Serviço' },
    empresa: 'Stefanini IT Solutions',
    periodo: { en: 'Mar 2013 – Jul 2013', pt: 'mar. 2013 – jul. 2013' },
  },
]

export const docencia = [
  {
    cargo: { en: 'Instructor – Machine and Deep Learning 1', pt: 'Professor – Machine and Deep Learning 1' },
    instituicao: 'Feevale',
    periodo: '2021',
  },
  {
    cargo: { en: 'Instructor – Data Science', pt: 'Professor – Data Science' },
    instituicao: 'TargetTrust Courses',
    periodo: { en: '2020 – 2021', pt: '2020 – 2021' },
  },
  {
    cargo: { en: 'Instructor – Python for Data Science', pt: 'Professor – Python para Data Science' },
    instituicao: 'Feevale',
    periodo: '2018',
  },
  {
    cargo: { en: 'Teaching Assistant – Business Intelligence', pt: 'Monitor – Business Intelligence' },
    instituicao: 'PUCRS',
    periodo: '2018',
  },
  {
    cargo: { en: 'Teaching Assistant – Database Laboratory', pt: 'Monitor – Laboratório de Banco de Dados' },
    instituicao: 'PUCRS',
    periodo: '2018',
  },
]

export const premios = [
  {
    titulo: {
      en: '2nd best Master’s dissertation in Artificial Intelligence in Brazil',
      pt: '2º Melhor Dissertação de Mestrado em Inteligência Artificial do Brasil',
    },
    evento: 'PhD Thesis Contest in Artificial Intelligence, CTDIAC-BRACIS',
    ano: 2018,
  },
  {
    titulo: { en: 'Best Paper', pt: 'Melhor Artigo' },
    evento: 'IEEE IJCNN',
    ano: 2017,
  },
  {
    titulo: { en: 'Best Student Poster', pt: 'Melhor Pôster de Estudante' },
    evento: { en: 'IFRS, Canoas Campus', pt: 'IFRS, Campus Canoas' },
    ano: 2015,
  },
]

// Habilidades agrupadas. Ferramentas citadas nos próprios artigos (PyTorch, OpenAI Gym) entram aqui.
export const habilidades = [
  {
    titulo: { en: 'Machine learning', pt: 'Aprendizado de máquina' },
    itens: {
      en: ['Imitation Learning', 'Reinforcement Learning', 'Deep Learning', 'Generative AI'],
      pt: ['Aprendizado por Imitação', 'Aprendizado por Reforço', 'Deep Learning', 'IA Generativa'],
    },
  },
  {
    titulo: { en: 'Foundation models and LLMs', pt: 'Modelos fundacionais e LLMs' },
    itens: {
      en: ['Tabular Foundation Models (TabPFN)', 'Language Models', 'Uncertainty Estimation'],
      pt: ['Modelos fundacionais tabulares (TabPFN)', 'Modelos de linguagem', 'Estimativa de incerteza'],
    },
  },
  {
    titulo: { en: 'Tools', pt: 'Ferramentas' },
    itens: {
      en: ['Python', 'PyTorch', 'OpenAI Gym', 'Git'],
      pt: ['Python', 'PyTorch', 'OpenAI Gym', 'Git'],
    },
  },
  {
    titulo: { en: 'Data and healthcare', pt: 'Dados e saúde' },
    itens: {
      en: ['Data Science', 'Synthetic EHR data', 'Clinical concept normalization'],
      pt: ['Ciência de dados', 'Dados sintéticos de prontuários', 'Normalização de conceitos clínicos'],
    },
  },
]
