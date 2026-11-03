import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const dicionario = {
  en: {
    inicio: 'Home',
    pesquisas: 'Research',
    curriculo: 'CV',
    ativarTemaEscuro: 'Switch to dark theme',
    ativarTemaClaro: 'Switch to light theme',
    trocarIdioma: 'Change language',
    verPesquisas: 'See research',
    verCurriculo: 'CV',
    sobreMim: 'About me',
    projeto: 'Project',
    linkPdf: 'PDF',
    linkCodigo: 'Code',
    linkArxiv: 'arXiv',
    linkDoi: 'DOI',
    linkScholar: 'Google Scholar',
    verDetalhes: 'Details',
    contexto: 'Background',
    ideia: 'The idea',
    algoritmos: 'How it works',
    limitacoes: 'Limitations',
    resultados: 'Results',
    figuras: 'Figures',
    resumoLabel: 'Abstract',
    resumoEmBreve: 'Summary coming soon.',
    filtrarTemas: 'Filter by topic',
    limparFiltros: 'Clear filters',
    redeTitulo: 'Co-author network',
    redeIntro: 'Click a co-author to see the papers you wrote together. Bigger circles mean more shared papers.',
    trabalhosCom: 'Papers with',
    limparSelecao: 'Clear selection',
    nenhumResultado: 'No research matches these topics.',
    pesquisasTitulo: 'Research',
    pesquisasIntro: 'Accepted and published papers, plus practical projects. Each page has the context, the venue and, where available, videos.',
    todas: 'All',
    publicacoes: 'Publications',
    listaCompleta: 'Full list, by year.',
    naoEncontrada: 'Research not found',
    voltarPesquisas: '← Back to research',
    primeiraPagina: 'First page of the paper',
    sobreTrabalho: 'About the work',
    autores: 'Authors',
    videos: 'Videos',
    status: 'Status',
    venue: 'Venue',
    ano: 'Year',
    baixarPdf: 'Download PDF',
    formacao: 'Education',
    experienciaIndustria: 'Industry experience',
    docencia: 'Teaching',
    premios: 'Awards',
    habilidades: 'Skills',
    pdf: '(PDF)',
    copyright: '©',
  },
  pt: {
    inicio: 'Início',
    pesquisas: 'Pesquisas',
    curriculo: 'Currículo',
    ativarTemaEscuro: 'Ativar tema escuro',
    ativarTemaClaro: 'Ativar tema claro',
    trocarIdioma: 'Trocar idioma',
    verPesquisas: 'Ver pesquisas',
    verCurriculo: 'Currículo',
    sobreMim: 'Sobre mim',
    projeto: 'Projeto',
    linkPdf: 'PDF',
    linkCodigo: 'Código',
    linkArxiv: 'arXiv',
    linkDoi: 'DOI',
    linkScholar: 'Google Scholar',
    verDetalhes: 'Detalhes',
    contexto: 'Contexto',
    ideia: 'A ideia',
    algoritmos: 'Como funciona',
    limitacoes: 'Limitações',
    resultados: 'Resultados',
    figuras: 'Figuras',
    resumoLabel: 'Resumo',
    resumoEmBreve: 'Resumo em breve.',
    filtrarTemas: 'Filtrar por tema',
    limparFiltros: 'Limpar filtros',
    redeTitulo: 'Rede de coautores',
    redeIntro: 'Clique em um coautor para ver os trabalhos feitos em conjunto. Círculos maiores significam mais trabalhos em comum.',
    trabalhosCom: 'Trabalhos com',
    limparSelecao: 'Limpar seleção',
    nenhumResultado: 'Nenhuma pesquisa tem esses temas.',
    pesquisasTitulo: 'Pesquisas',
    pesquisasIntro: 'Trabalhos aceitos, publicados e projetos práticos. Cada página traz o contexto, o venue e, quando existem, vídeos.',
    todas: 'Todas',
    publicacoes: 'Publicações',
    listaCompleta: 'Lista completa, por ano.',
    naoEncontrada: 'Pesquisa não encontrada',
    voltarPesquisas: '← Voltar para as pesquisas',
    primeiraPagina: 'Primeira página do artigo',
    sobreTrabalho: 'Sobre o trabalho',
    autores: 'Autores',
    videos: 'Vídeos',
    status: 'Status',
    venue: 'Venue',
    ano: 'Ano',
    baixarPdf: 'Baixar em PDF',
    formacao: 'Formação',
    experienciaIndustria: 'Experiência na indústria',
    docencia: 'Docência',
    premios: 'Prêmios',
    habilidades: 'Habilidades',
    pdf: '(PDF)',
    copyright: '©',
  },
}

const IdiomaContext = createContext(null)

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState(() => {
    try {
      return localStorage.getItem('idioma') === 'pt' ? 'pt' : 'en'
    } catch {
      return 'en'
    }
  })

  useEffect(() => {
    document.documentElement.lang = idioma === 'pt' ? 'pt-BR' : 'en'
    try {
      localStorage.setItem('idioma', idioma)
    } catch {
      // Sem armazenamento disponível, o idioma vale só nesta visita.
    }
  }, [idioma])

  const valor = useMemo(
    () => ({ idioma, setIdioma, t: (chave) => dicionario[idioma][chave] ?? chave }),
    [idioma],
  )

  return <IdiomaContext.Provider value={valor}>{children}</IdiomaContext.Provider>
}

export function useIdioma() {
  return useContext(IdiomaContext)
}
