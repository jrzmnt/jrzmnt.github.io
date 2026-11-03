import { useMemo, useState } from 'react'
import publications from '../data/publications.js'
import { useIdioma } from '../i18n.jsx'
import ListaPesquisas from '../components/ListaPesquisas.jsx'
import RedeColaboracoes from '../components/RedeColaboracoes.jsx'
import CopiarBibtex from '../components/CopiarBibtex.jsx'
import { gerarBibtex } from '../lib/bibtex.js'

// Gera um único arquivo .bib com todas as publicações e dispara o download.
function baixarBibtex() {
  const conteudo = publications.map(gerarBibtex).join('\n\n') + '\n'
  const url = URL.createObjectURL(new Blob([conteudo], { type: 'text/plain;charset=utf-8' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'publicacoes-juarez-monteiro.bib'
  link.click()
  URL.revokeObjectURL(url)
}
import Reveal from '../components/Reveal.jsx'

// Cor do ponto da linha do tempo por tipo de venue.
const TIPO_COR = {
  conference: 'bg-indigo-500 ring-indigo-200 dark:ring-indigo-900',
  workshop: 'bg-amber-500 ring-amber-200 dark:ring-amber-900',
  journal: 'bg-emerald-500 ring-emerald-200 dark:ring-emerald-900',
  book: 'bg-rose-500 ring-rose-200 dark:ring-rose-900',
}

export default function Pesquisas() {
  const { t } = useIdioma()
  const [coautor, setCoautor] = useState(null)

  const porAno = useMemo(() => {
    const filtradas = coautor ? publications.filter((pub) => pub.authors.includes(coautor)) : publications
    const grupos = {}
    for (const pub of filtradas) {
      ;(grupos[pub.year] ??= []).push(pub)
    }
    return Object.entries(grupos).sort(([a], [b]) => Number(b) - Number(a))
  }, [coautor])

  return (
    <>
      <Reveal>
        <h1 className="text-4xl font-bold tracking-tight">{t('pesquisasTitulo')}</h1>
        <p className="mt-4 max-w-2xl text-neutral-600 dark:text-neutral-400">{t('pesquisasIntro')}</p>
      </Reveal>

      <div className="mt-8">
        <ListaPesquisas />
      </div>

      <section className="mt-24">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight">{t('redeTitulo')}</h2>
        </Reveal>
        <div className="mt-6">
          <RedeColaboracoes selecionado={coautor} onSelecionar={setCoautor} />
        </div>
      </section>

      <section className="mt-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">{t('publicacoes')}</h2>
            <button
              type="button"
              onClick={baixarBibtex}
              className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {t('baixarBib')}
            </button>
          </div>
          <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
            {coautor ? `${t('trabalhosCom')} ${coautor}` : t('listaCompleta')}
            {coautor && (
              <button
                type="button"
                onClick={() => setCoautor(null)}
                className="ml-3 text-indigo-600 underline underline-offset-4 dark:text-indigo-400"
              >
                {t('limparSelecao')}
              </button>
            )}
          </p>
        </Reveal>

        <ol className="relative mt-12 border-l-2 border-neutral-200 dark:border-neutral-800">
          {porAno.map(([ano, lista]) => (
            <li key={ano} className="mb-12 ml-8">
              <Reveal>
                <span className="absolute -left-[13px] flex h-6 w-6 items-center justify-center rounded-full bg-neutral-900 ring-4 ring-neutral-50 dark:bg-neutral-100 dark:ring-neutral-950" />
                <p className="font-display text-3xl leading-none">{ano}</p>
              </Reveal>
              <ul className="mt-6 space-y-6">
                {lista.map((pub, i) => (
                  <li key={pub.title} className="relative">
                    <Reveal delay={i * 0.05}>
                    <div className="group relative rounded-xl border border-neutral-200 bg-white/70 p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900/60">
                      <span
                        className={`absolute -left-[41px] top-7 h-3.5 w-3.5 rounded-full ring-4 ${TIPO_COR[pub.venueType] ?? TIPO_COR.conference}`}
                        title={pub.venueType}
                      />
                      <p className="font-medium leading-snug">{pub.title}</p>
                      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">{pub.authors.join(', ')}</p>
                      <p className="mt-1 text-sm italic text-neutral-500 dark:text-neutral-400">{pub.venue}</p>
                      <CopiarBibtex pub={pub} />
                    </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
