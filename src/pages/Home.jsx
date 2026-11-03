import { Link } from 'react-router-dom'
import { perfil } from '../data/site.js'
import { useIdioma } from '../i18n.jsx'
import ListaPesquisas from '../components/ListaPesquisas.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Home() {
  const { idioma, t } = useIdioma()

  return (
    <>
      <section className="grid items-center gap-12 md:grid-cols-[1fr_auto]">
        <div>
          <p className="animar-entrada text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {perfil.cargo[idioma]}
          </p>
          <h1 className="animar-entrada mt-3 text-5xl font-bold tracking-tight [animation-delay:120ms] sm:text-6xl">
            <span className="font-display">{perfil.nome}</span>
          </h1>
          <p className="animar-entrada mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600 [animation-delay:240ms] dark:text-neutral-400">
            {perfil.bio[idioma]}
          </p>
          <div className="animar-entrada mt-8 flex flex-wrap gap-3 [animation-delay:360ms]">
            <Link
              to="/pesquisas"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition hover:-translate-y-0.5 hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {t('verPesquisas')}
            </Link>
            <Link
              to="/curriculo"
              className="rounded-full border border-neutral-300 bg-white/60 px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-neutral-900 dark:border-neutral-700 dark:bg-transparent dark:hover:border-neutral-100"
            >
              {t('verCurriculo')}
            </Link>
            <a
              href={`/cv/cv-juarez-monteiro-${idioma}.pdf`}
              download
              className="rounded-full border border-neutral-300 bg-white/60 px-5 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:border-neutral-900 dark:border-neutral-700 dark:bg-transparent dark:hover:border-neutral-100"
            >
              {t('baixarCvPdf')} ↓
            </a>
          </div>
          <ul className="animar-entrada mt-6 flex flex-wrap gap-4 text-sm text-neutral-500 [animation-delay:440ms] dark:text-neutral-400">
            {perfil.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-4 transition hover:text-indigo-600 hover:underline dark:hover:text-indigo-300"
                >
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.15}>
          <div className="group relative">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-indigo-400 via-fuchsia-400 to-sky-400 opacity-30 blur-2xl transition duration-500 group-hover:opacity-50" />
            <img
              src={perfil.foto}
              alt={perfil.nome}
              className="relative h-56 w-56 rounded-3xl object-cover shadow-2xl ring-1 ring-white/60 transition duration-500 group-hover:scale-[1.02] dark:ring-neutral-800 sm:h-64 sm:w-64"
            />
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="mt-20 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-600 dark:text-indigo-400">{t('sobreMim')}</p>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {perfil.sobre[idioma].map((paragrafo) => (
              <p key={paragrafo.slice(0, 40)}>{paragrafo}</p>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="mt-24">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight">{t('pesquisasTitulo')}</h2>
        </Reveal>
        <div className="mt-10">
          <ListaPesquisas />
        </div>
      </section>
    </>
  )
}
