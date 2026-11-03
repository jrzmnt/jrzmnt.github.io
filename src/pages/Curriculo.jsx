import { perfil, formacao, experienciaIndustria, docencia, premios, habilidades } from '../data/site.js'
import { useIdioma } from '../i18n.jsx'
import Reveal from '../components/Reveal.jsx'

function Secao({ titulo, children }) {
  return (
    <section className="mt-12 break-inside-avoid">
      <h2 className="border-b border-neutral-200 pb-2 text-xl font-semibold tracking-tight dark:border-neutral-800">{titulo}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}

export default function Curriculo() {
  const { idioma, t } = useIdioma()

  return (
    <>
      <div className="no-print flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-4xl font-bold tracking-tight">{t('curriculo')}</h1>
        <button
          onClick={() => window.print()}
          className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          {t('baixarPdf')}
        </button>
      </div>

      <Reveal>
        <header className="mt-10">
          <h1 className="hidden text-3xl font-bold print:block">{perfil.nome}</h1>
          <p className="text-lg text-indigo-600 dark:text-indigo-400">{perfil.cargo[idioma]}</p>
          <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
            {perfil.email} · {perfil.links.map((l) => l.label).join(' · ')}
          </p>
          <p className="mt-6 leading-relaxed text-neutral-700 dark:text-neutral-300">{perfil.bio[idioma]}</p>
        </header>

        <Secao titulo={t('formacao')}>
          <ul className="space-y-6">
            {formacao.map((item) => (
              <li key={item.grau[idioma]}>
                <p className="font-medium">{item.grau[idioma]}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.instituicao[idioma]}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">{item.periodo[idioma]}</p>
                {item.tese && (
                  <p className="mt-1 text-sm italic text-neutral-600 dark:text-neutral-400">
                    {item.tese}
                    {item.pdf && (
                      <>
                        {' '}
                        <a href={item.pdf} download className="no-print not-italic text-indigo-600 hover:underline dark:text-indigo-400">
                          {t('pdf')}
                        </a>
                      </>
                    )}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </Secao>

        <Secao titulo={t('experienciaIndustria')}>
          <ul className="space-y-5">
            {experienciaIndustria.map((item) => (
              <li key={item.cargo.en + item.periodo.en} className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
                <div>
                  <p className="font-medium">{item.cargo[idioma]}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.empresa}</p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">{item.periodo[idioma]}</p>
              </li>
            ))}
          </ul>
        </Secao>

        <Secao titulo={t('docencia')}>
          <ul className="space-y-4">
            {docencia.map((item) => (
              <li key={item.cargo.en} className="flex flex-col sm:flex-row sm:justify-between sm:gap-6">
                <div>
                  <p className="font-medium">{item.cargo[idioma]}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.instituicao}</p>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-500">{typeof item.periodo === 'string' ? item.periodo : item.periodo[idioma]}</p>
              </li>
            ))}
          </ul>
        </Secao>

        <Secao titulo={t('premios')}>
          <ul className="space-y-4">
            {premios.map((item) => (
              <li key={item.titulo.en}>
                <p className="font-medium">{item.titulo[idioma]}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {typeof item.evento === 'string' ? item.evento : item.evento[idioma]}, {item.ano}
                </p>
              </li>
            ))}
          </ul>
        </Secao>

        <Secao titulo={t('habilidades')}>
          <div className="flex flex-wrap gap-2">
            {habilidades[idioma].map((h) => (
              <span key={h} className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
                {h}
              </span>
            ))}
          </div>
        </Secao>
      </Reveal>
    </>
  )
}
