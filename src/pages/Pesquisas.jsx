import { useMemo, useState } from 'react'
import publications from '../data/publications.js'
import { useIdioma } from '../i18n.jsx'
import ListaPesquisas from '../components/ListaPesquisas.jsx'
import RedeColaboracoes from '../components/RedeColaboracoes.jsx'
import Reveal from '../components/Reveal.jsx'

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
          <h2 className="text-2xl font-semibold tracking-tight">{t('publicacoes')}</h2>
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
        <div className="mt-8 space-y-10">
          {porAno.map(([ano, lista]) => (
            <Reveal key={ano}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{ano}</h3>
              <ul className="mt-4 space-y-5">
                {lista.map((pub) => (
                  <li key={pub.title} className="border-l-2 border-neutral-200 pl-5 dark:border-neutral-800">
                    <p className="font-medium leading-snug">{pub.title}</p>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{pub.authors.join(', ')}</p>
                    <p className="mt-1 text-sm italic text-neutral-500 dark:text-neutral-400">{pub.venue}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
