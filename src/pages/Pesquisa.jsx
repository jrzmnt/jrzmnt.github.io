import { Link, useParams } from 'react-router-dom'
import { pesquisas } from '../data/pesquisas.js'
import { conteudo } from '../data/conteudo.js'
import { useIdioma } from '../i18n.jsx'
import VideoEmbed from '../components/VideoEmbed.jsx'
import Reveal from '../components/Reveal.jsx'
import { StatusBadge, TemaBadge } from '../components/ResearchCard.jsx'
import CopiarLink from '../components/CopiarLink.jsx'

const RECURSOS = { pdf: 'linkPdf', codigo: 'linkCodigo', arxiv: 'linkArxiv', doi: 'linkDoi', editor: 'linkEditor' }

export default function Pesquisa() {
  const { idioma, t } = useIdioma()
  const { slug } = useParams()
  const pesquisa = pesquisas.find((p) => p.slug === slug && p.publico)

  if (!pesquisa) {
    return (
      <div className="py-20 text-center">
        <h1 className="font-display text-3xl">{t('naoEncontrada')}</h1>
        <Link to="/pesquisas" className="mt-6 inline-block text-neutral-600 underline underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
          {t('voltarPesquisas')}
        </Link>
      </div>
    )
  }

  const textos = pesquisa[idioma]
  const venue = pesquisa.venue[idioma]
  const detalhes = conteudo[slug]
  const secoes = detalhes?.[idioma]
  const links = detalhes?.links ?? []
  const figuras = detalhes?.figuras ?? []

  return (
    <article>
      <Link to="/pesquisas" className="animar-entrada text-sm text-neutral-500 transition hover:-translate-x-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100">
        {t('voltarPesquisas')}
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
          {venue && <span className="font-medium text-neutral-800 dark:text-neutral-200">{venue}</span>}
          {pesquisa.ano && <span className="font-display text-xl text-neutral-900 dark:text-neutral-100">{pesquisa.ano}</span>}
          {textos.status && <StatusBadge status={textos.status} projeto={pesquisa.projeto} />}
        </div>
        <h1 className="animar-entrada mt-4 font-display text-4xl leading-tight tracking-tight [animation-delay:100ms] sm:text-5xl">
          {textos.titulo}
        </h1>
        {textos.subtitulo && <p className="animar-entrada mt-3 text-xl italic text-neutral-600 [animation-delay:180ms] dark:text-neutral-400">{textos.subtitulo}</p>}
        {pesquisa.autores.length > 0 && (
          <p className="animar-entrada mt-4 text-neutral-600 [animation-delay:240ms] dark:text-neutral-400">{pesquisa.autores.join(', ')}</p>
        )}

        {links.length > 0 && (
          <div className="animar-entrada mt-6 flex flex-wrap gap-2 [animation-delay:300ms]">
            {links.map((link) => (
              <a
                key={link.tipo}
                href={link.href}
                target={link.href.startsWith('/') ? undefined : '_blank'}
                rel={link.href.startsWith('/') ? undefined : 'noopener noreferrer'}
                download={link.tipo === 'pdf' ? '' : undefined}
                className="rounded-full border border-neutral-900 px-4 py-1.5 text-sm font-medium transition hover:bg-neutral-900 hover:text-white dark:border-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
              >
                {t(RECURSOS[link.tipo])} {link.tipo === 'pdf' ? '↓' : '↗'}
              </a>
            ))}
          </div>
        )}
        <div className="animar-entrada mt-4 [animation-delay:340ms]">
          <CopiarLink />
        </div>
      </header>

      <div className="mt-12 grid gap-12 md:grid-cols-[1fr_260px] md:items-start">
        <div className="space-y-12">
          {secoes ? (
            <>
              {secoes.contexto?.length > 0 && (
                <Reveal>
                  <section>
                    <h2 className="font-display text-2xl">{t('contexto')}</h2>
                    <div className="mt-4 space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {secoes.contexto.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                    </div>
                  </section>
                </Reveal>
              )}
              <Reveal>
                <section>
                  <h2 className="font-display text-2xl">{t('ideia')}</h2>
                  <div className="mt-4 space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {secoes.ideia.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                  </div>
                </section>
              </Reveal>
              <Reveal>
                <section>
                  <h2 className="font-display text-2xl">{t('algoritmos')}</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {secoes.algoritmos.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                  </div>
                </section>
              </Reveal>
              <Reveal>
                <section>
                  <h2 className="font-display text-2xl">{t('resultados')}</h2>
                  <div className="mt-4 space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {secoes.resultados.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                  </div>
                </section>
              </Reveal>
              {secoes.tabelas?.map((tabela) => (
                <Reveal key={tabela.titulo}>
                  <section>
                    <h3 className="font-display text-xl">{tabela.titulo}</h3>
                    <div className="mt-4 overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                          <tr>
                            {tabela.colunas.map((coluna) => (
                              <th key={coluna} className="px-4 py-2.5 font-medium">{coluna}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {tabela.linhas.map((linha) => (
                            <tr key={linha.join('|')} className="border-t border-neutral-200 dark:border-neutral-800">
                              {linha.map((celula, j) => (
                                <td key={j} className="px-4 py-2.5 tabular-nums text-neutral-700 dark:text-neutral-300">{celula}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </section>
                </Reveal>
              ))}
              {secoes.limitacoes?.length > 0 && (
                <Reveal>
                  <section>
                    <h2 className="font-display text-2xl">{t('limitacoes')}</h2>
                    <div className="mt-4 space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
                      {secoes.limitacoes.map((p) => <p key={p.slice(0, 30)}>{p}</p>)}
                    </div>
                  </section>
                </Reveal>
              )}
            </>
          ) : (
            <Reveal>
              <section className="rounded-2xl border border-neutral-200 bg-white/70 p-8 dark:border-neutral-800 dark:bg-neutral-900/60">
                <p className="text-neutral-600 dark:text-neutral-400">{textos.resumo || t('resumoEmBreve')}</p>
              </section>
            </Reveal>
          )}

          {pesquisa.videos.length > 0 && (
            <Reveal>
              <section>
                <h2 className="font-display text-2xl">{t('videos')}</h2>
                <div className="mt-6 grid gap-8">
                  {pesquisa.videos.map((video) => (
                    <VideoEmbed key={video.id} id={video.id} titulo={video.titulo} />
                  ))}
                </div>
              </section>
            </Reveal>
          )}
        </div>

        <aside className="space-y-8 md:sticky md:top-28">
          {pesquisa.imagem && (
            <Reveal delay={0.1}>
              <figure>
                <img src={pesquisa.imagem} alt={`${t('primeiraPagina')}: ${textos.titulo}`} className="w-full rounded-md shadow-xl ring-1 ring-neutral-200 dark:ring-neutral-800" />
                <figcaption className="mt-2 text-center text-xs text-neutral-500">{t('primeiraPagina')}</figcaption>
              </figure>
            </Reveal>
          )}
          {pesquisa.temas.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {pesquisa.temas.map((tema) => (
                <TemaBadge key={tema} tema={tema} />
              ))}
            </div>
          )}
        </aside>
      </div>

      {figuras.length > 0 && (
        <Reveal>
          <section className="mt-16">
            <h2 className="font-display text-2xl">{t('figuras')}</h2>
            <div className="mt-6 grid gap-8">
              {figuras.map((figura) => (
                <figure key={figura.src} className="rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800">
                  <img src={figura.src} alt={figura.legenda[idioma]} className="mx-auto w-full" />
                  <figcaption className="mt-3 text-center text-sm text-neutral-600 dark:text-neutral-400">{figura.legenda[idioma]}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </Reveal>
      )}
    </article>
  )
}
