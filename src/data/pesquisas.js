import publications from './publications.js'
import { conteudo } from './conteudo.js'
import { resumos } from './resumos.js'
import { temasPorArtigo } from './temas.js'

// publico: false mantém a pesquisa fora do site até a decisão de publicar.
// projeto: true marca projetos práticos, que não são artigos.
// Textos em en e pt. Só entram campos confirmados no registro da wiki (pesquisas-autorais.md).
const curadas = [
  {
    slug: 'ask-in-the-dark',
    temas: ['Reinforcement Learning', 'LLMs'],
    imagem: '/papers/ask-in-the-dark.png',
    ano: 2026,
    venue: { en: 'PRL @ IJCAI-ECAI 2026 (workshop)', pt: 'PRL @ IJCAI-ECAI 2026 (workshop)' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'ASK in the Dark',
      subtitulo: 'Language-model assistance under partial observability',
      linha: 'ASK',
      status: 'Accepted',
      resumo: 'Extends ASK to POMDPs. A PPO agent queries a language model when its policy entropy is high. The question is whether the problem is context rather than capacity: on DoorKey, vanilla ASK matches PPO, and ASK+ outperforms both.',
    },
    pt: {
      titulo: 'ASK in the Dark',
      subtitulo: 'Assistência de modelos de linguagem sob observabilidade parcial',
      linha: 'ASK',
      status: 'Aceito',
      resumo: 'Estende o ASK a POMDPs. Um agente PPO consulta um modelo de linguagem quando a entropia da política é alta. A pergunta é se o problema é de contexto e não de capacidade: no DoorKey, o ASK puro iguala o PPO, e a versão ASK+ supera ambos.',
    },
    autores: ['Juarez Monteiro', 'Nathan Gavenski', 'Guilherme Drummond Lima', 'Francisco Galuppo Azevedo', 'Odinaldo Rodrigues', 'Adriano Veloso'],
    imagens: [],
    videos: [],
  },
  {
    slug: 'when-to-ask',
    temas: ['Reinforcement Learning', 'LLMs'],
    imagem: '/papers/when-to-ask.png',
    ano: 2026,
    venue: { en: 'IJCNN 2026', pt: 'IJCNN 2026' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'When to ASK',
      subtitulo: 'Uncertainty-gated language assistance for reinforcement learning',
      linha: 'ASK',
      status: 'Published',
      resumo: 'The first paper in the ASK line. A PPO agent in FrozenLake queries a language model when its uncertainty, estimated with MC Dropout, exceeds a threshold.',
    },
    pt: {
      titulo: 'When to ASK',
      subtitulo: 'Assistência de linguagem com portão de incerteza para aprendizado por reforço',
      linha: 'ASK',
      status: 'Publicado',
      resumo: 'Primeiro artigo da linha ASK. Um agente PPO em FrozenLake consulta um modelo de linguagem quando a incerteza, estimada por MC Dropout, passa de um limiar.',
    },
    autores: ['Juarez Monteiro', 'Nathan Gavenski', 'Gianlucca Zuin', 'Adriano Veloso'],
    imagens: [],
    videos: [],
  },
  {
    slug: 'pact',
    temas: ['Reinforcement Learning', 'LLMs', 'Planning'],
    imagem: '/papers/pact.png',
    ano: 2026,
    venue: { en: 'LM4Plan @ ICML 2026 (workshop)', pt: 'LM4Plan @ ICML 2026 (workshop)' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'PACT',
      subtitulo: 'Committed planning with small language models',
      linha: 'Planning',
      status: 'Accepted (poster)',
      resumo: 'Committed planning with verification by simulation. A reactive RL agent is combined with a 2B-parameter small language model that plans before acting.',
    },
    pt: {
      titulo: 'PACT',
      subtitulo: 'Planejamento comprometido com modelos de linguagem pequenos',
      linha: 'Planejamento',
      status: 'Aceito (pôster)',
      resumo: 'Planejamento comprometido com verificação por simulação. Um agente RL reativo é combinado com um modelo de linguagem pequeno de 2B parâmetros, que planeja antes de agir.',
    },
    autores: ['Nathan Gavenski', 'Juarez Monteiro', 'Francisco Galuppo Azevedo', 'Adriano Veloso', 'Odinaldo Rodrigues'],
    imagens: [],
    videos: [],
  },
  {
    slug: 'datasynk',
    imagem: '/papers/datasynk.png',
    temas: ['Tabular FMs', 'Healthcare'],
    ano: 2026,
    venue: { en: 'FMSD @ ICML 2026 (workshop)', pt: 'FMSD @ ICML 2026 (workshop)' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'DataSynK',
      subtitulo: 'Causal-symbolic patient record synthesis for tabular foundation models',
      linha: 'Tabular data in healthcare',
      status: 'Accepted (poster)',
      resumo: 'Synthesis of binary electronic health record tables with a medical ontology (SNOMED CT). Evaluated on 643 records from a Brazilian hospital, in a low-data regime.',
    },
    pt: {
      titulo: 'DataSynK',
      subtitulo: 'Síntese causal-simbólica de prontuários para modelos fundacionais tabulares',
      linha: 'Dados tabulares em saúde',
      status: 'Aceito (pôster)',
      resumo: 'Síntese de tabelas binárias de prontuários eletrônicos com uma ontologia médica (SNOMED CT). Avaliado em 643 registros de um hospital brasileiro, em regime de poucos dados.',
    },
    autores: ['Eduarda T. C. Chagas', 'Roberta Viola', 'Juarez Monteiro', 'Francisco Galuppo Azevedo', 'Saulo Fernandes Saturnino', 'Adriano Veloso'],
    imagens: [],
    videos: [],
  },
  {
    slug: 'datasynk-lxai',
    temas: ['Tabular FMs', 'Healthcare'],
    ano: 2026,
    venue: { en: 'LXAI @ ICML 2026', pt: 'LXAI @ ICML 2026' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'Beyond Statistical Fidelity: Causal-Valid Synthetic EHR Generation',
      subtitulo: 'Full version for LXAI',
      linha: 'Tabular data in healthcare',
      status: 'Published (no decision)',
      resumo: 'Full version of DataSynK, focused on the causal validity of synthetic records, not only on statistical fidelity.',
    },
    pt: {
      titulo: 'Beyond Statistical Fidelity: Causal-Valid Synthetic EHR Generation',
      subtitulo: 'Versão completa para o LXAI',
      linha: 'Dados tabulares em saúde',
      status: 'Publicado (sem decisão)',
      resumo: 'Versão completa do DataSynK, focada em validade causal da síntese de prontuários e não só em fidelidade estatística.',
    },
    autores: ['Eduarda T. C. Chagas', 'Roberta Viola', 'Juarez Monteiro', 'Francisco Galuppo Azevedo', 'Saulo Fernandes Saturnino', 'Adriano Veloso'],
    imagens: [],
    videos: [],
  },
  {
    slug: 'snokind-lxai',
    temas: ['LLMs', 'Healthcare'],
    ano: 2026,
    venue: { en: 'LXAI @ ICML 2026', pt: 'LXAI @ ICML 2026' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'SNOKind',
      subtitulo: 'Normalization of clinical concepts in Brazilian Portuguese',
      linha: 'Tabular data in healthcare',
      status: 'Published (no decision)',
      resumo: 'Normalization of clinical concepts in Brazilian Portuguese to SNOMED CT, combining retrieval and a language model.',
    },
    pt: {
      titulo: 'SNOKind',
      subtitulo: 'Normalização de conceitos clínicos em português brasileiro',
      linha: 'Dados tabulares em saúde',
      status: 'Publicado (sem decisão)',
      resumo: 'Normalização de conceitos clínicos em português brasileiro para a terminologia SNOMED CT, combinando recuperação e um modelo de linguagem.',
    },
    autores: ['Roberta Viola', 'Juarez Monteiro', 'Eduarda T. C. Chagas', 'Saulo Fernandes Saturnino', 'Adriano Veloso'],
    imagens: [],
    videos: [],
  },
  {
    slug: 'tabpfn-policy',
    temas: ['Imitation Learning', 'Tabular FMs'],
    ano: 2026,
    venue: { en: 'TBD', pt: 'A definir' },
    publico: false,
    projeto: true,
    en: {
      titulo: 'TabPFN as a control policy',
      subtitulo: 'Behavior cloning with a tabular foundation model',
      linha: 'Imitation learning',
      status: 'Planned',
      resumo: 'Uses TabPFN as a control policy trained by behavior cloning, without gradient training.',
    },
    pt: {
      titulo: 'TabPFN como política de controle',
      subtitulo: 'Clonagem de comportamento com um modelo fundacional tabular',
      linha: 'Aprendizado por imitação',
      status: 'Em planejamento',
      resumo: 'Usa o TabPFN como política de controle treinada por clonagem de comportamento, sem treinamento por gradiente.',
    },
    autores: ['Juarez Monteiro'],
    imagens: [],
    videos: [{ id: 'lkEG4GceMvE', titulo: 'TabPFN-3.5 as a Behavior-Cloned Policy for Control' }],
  },
  {
    slug: 'sail',
    imagem: '/papers/sail.png',
    temas: ['Imitation Learning', 'Deep Learning'],
    ano: 2023,
    venue: { en: 'IJCNN 2023', pt: 'IJCNN 2023' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'Self-Supervised Adversarial Imitation Learning',
      subtitulo: 'Behavior cloning with an adversarial discriminator',
      linha: 'Imitation learning',
      status: 'Published',
      resumo: 'Improves behavior cloning with a discriminator. No manual goal verification is needed, learning is guided by expert state transitions, and the policy no longer idles, which avoids bad local minima.',
    },
    pt: {
      titulo: 'Self-Supervised Adversarial Imitation Learning',
      subtitulo: 'Clonagem de comportamento com discriminador adversarial',
      linha: 'Aprendizado por imitação',
      status: 'Publicado',
      resumo: 'Melhora a clonagem de comportamento com um discriminador. Não é preciso verificar metas manualmente, o aprendizado é guiado por transições do especialista, e a política deixa de ficar parada, o que evita mínimos locais ruins.',
    },
    autores: ['Juarez Monteiro', 'Nathan Gavenski', 'Felipe Meneguzzi', 'Rodrigo Barros'],
    imagens: [],
    videos: [
      { id: 'haAsk8TLH9Y', titulo: 'Self-Supervised Adversarial Imitation Learning (SAIL)' },
      { id: 'pi1ZecJdrlc', titulo: 'Adversarial Imitation Learning (presentation)' },
    ],
  },
  {
    slug: 'abco',
    imagem: '/papers/abco.png',
    temas: ['Imitation Learning', 'Deep Learning'],
    ano: 2020,
    venue: { en: 'IJCNN 2020', pt: 'IJCNN 2020' },
    publico: true,
    projeto: false,
    en: {
      titulo: 'Augmented Behavioral Cloning from Observation',
      subtitulo: 'Augmented behavior cloning from observation',
      linha: 'Imitation learning',
      status: 'Published',
      resumo: 'Improves behavior cloning by integrating inverse dynamics, self-attention and sampling. It outperforms the compared methods in four environments.',
    },
    pt: {
      titulo: 'Augmented Behavioral Cloning from Observation',
      subtitulo: 'Clonagem de comportamento a partir de observação aumentada',
      linha: 'Aprendizado por imitação',
      status: 'Publicado',
      resumo: 'Melhora a clonagem de comportamento integrando dinâmica inversa, auto-atenção e amostragem. Supera os métodos comparados em quatro ambientes.',
    },
    autores: ['Juarez Monteiro', 'Nathan Gavenski', 'Roger Granada', 'Felipe Meneguzzi', 'Rodrigo Barros'],
    imagens: [],
    videos: [{ id: 'jlTUoxX_fiw', titulo: 'Augmented Behavioral Cloning from Observation' }],
  },
  {
    slug: 'q-tables-mountaincar',
    temas: ['Reinforcement Learning'],
    ano: null,
    venue: { en: '', pt: '' },
    publico: true,
    projeto: true,
    en: {
      titulo: 'Q-Learning on MountainCar-v0',
      subtitulo: 'Q-table visualization on 5×5 to 30×30 grids',
      linha: 'Reinforcement learning',
      status: 'Project',
      resumo: 'Visualization of Q-learning Q-tables on MountainCar-v0, with 5×5, 10×10, 20×20 and 30×30 discretizations.',
    },
    pt: {
      titulo: 'Q-Learning no MountainCar-v0',
      subtitulo: 'Visualização de Q-tables em grades de 5×5 a 30×30',
      linha: 'Aprendizado por reforço',
      status: 'Projeto',
      resumo: 'Visualização das Q-tables do Q-Learning no MountainCar-v0, com discretizações de 5×5, 10×10, 20×20 e 30×30.',
    },
    autores: [],
    imagens: [],
    videos: [{ id: 'bS2fjDNwmmg', titulo: 'MountainCar-v0 – Q-Learning – Q-Tables Visualization' }],
  },
  {
    slug: 'bomberman-bfs-astar',
    temas: ['Planning'],
    ano: null,
    venue: { en: '', pt: '' },
    publico: true,
    projeto: true,
    en: {
      titulo: 'Intelligent Bomberman Agent',
      subtitulo: 'Breadth-first search (BFS) and A*',
      linha: 'Intelligent agents',
      status: 'Project',
      resumo: 'An intelligent agent for the Bomberman game, using breadth-first search (BFS) and A*.',
    },
    pt: {
      titulo: 'Agente inteligente para Bomberman',
      subtitulo: 'Busca em largura (BFS) e A*',
      linha: 'Agentes inteligentes',
      status: 'Projeto',
      resumo: 'Agente inteligente para o jogo Bomberman, usando busca em largura (BFS) e A*.',
    },
    autores: [],
    imagens: [],
    videos: [{ id: 'DzY_gMCkpaM', titulo: 'AI Bomberman Intelligent Agent using BFS and A*' }],
  },
]

const slugify = (texto) => texto.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// Publicações sem página curada entram só com metadados, para que todo o histórico apareça.
function montarCatalogo(entradas) {
  const usadas = new Set()
  const curadasComPublicacao = entradas.map((p) => {
    const busca = conteudo[p.slug]?.busca
    const pub = busca ? publications.find((x) => x.title.includes(busca)) : undefined
    if (pub) usadas.add(pub.title)
    return { ...p, temas: temasPorArtigo[p.slug] ?? p.temas, autores: p.autores.length ? p.autores : (pub?.authors ?? []) }
  })

  const semPagina = publications
    .filter((pub) => !usadas.has(pub.title))
    .map((pub) => {
      const slug = `${pub.year}-${slugify(pub.title)}`.slice(0, 100)
      const gerado = resumos[slug]
      return {
        slug,
        ano: pub.year,
        imagem: gerado?.imagem ?? undefined,
        venue: { en: pub.venue, pt: pub.venue },
        publico: true,
        projeto: false,
        temas: temasPorArtigo[slug] ?? gerado?.temas ?? [],
        autores: pub.authors,
        imagens: [],
        videos: [],
        en: { titulo: pub.title, subtitulo: '', linha: '', status: 'Published', resumo: gerado?.en?.ideia?.[0] ?? '' },
        pt: { titulo: pub.title, subtitulo: '', linha: '', status: 'Publicado', resumo: gerado?.pt?.ideia?.[0] ?? '' },
      }
    })

  return [...curadasComPublicacao, ...semPagina].sort((a, b) => (b.ano ?? 0) - (a.ano ?? 0))
}

export const pesquisas = montarCatalogo(curadas)
