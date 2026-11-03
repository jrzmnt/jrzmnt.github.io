import { Link } from 'react-router-dom'
import { useIdioma } from '../i18n.jsx'
import { conteudo } from '../data/conteudo.js'

const TEMAS_NO_CARD = 3
const RECURSOS = { pdf: 'linkPdf', codigo: 'linkCodigo', arxiv: 'linkArxiv', doi: 'linkDoi', editor: 'linkEditor' }

// Cada tema recebe sempre a mesma cor, escolhida pelo nome. As classes ficam escritas por extenso para o Tailwind encontrá-las.
const PALETA = [
  {
    base: 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300',
    ativo: 'border-indigo-600 bg-indigo-600 text-white',
  },
  {
    base: 'border-violet-200 bg-violet-50 text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300',
    ativo: 'border-violet-600 bg-violet-600 text-white',
  },
  {
    base: 'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-800 dark:bg-teal-950/50 dark:text-teal-300',
    ativo: 'border-teal-600 bg-teal-600 text-white',
  },
  {
    base: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-300',
    ativo: 'border-amber-600 bg-amber-600 text-white',
  },
  {
    base: 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950/50 dark:text-rose-300',
    ativo: 'border-rose-600 bg-rose-600 text-white',
  },
  {
    base: 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300',
    ativo: 'border-sky-600 bg-sky-600 text-white',
  },
  {
    base: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300',
    ativo: 'border-emerald-600 bg-emerald-600 text-white',
  },
  {
    base: 'border-orange-200 bg-orange-50 text-orange-700 dark:border-orange-800 dark:bg-orange-950/50 dark:text-orange-300',
    ativo: 'border-orange-600 bg-orange-600 text-white',
  },
]

function corDoTema(tema) {
  const soma = [...tema].reduce((total, letra) => total + letra.charCodeAt(0), 0)
  return PALETA[soma % PALETA.length]
}

export function StatusBadge({ status, projeto }) {
  const cor = projeto
    ? 'border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-800 dark:bg-sky-950/50 dark:text-sky-300'
    : 'border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300'

  return <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${cor}`}>{status}</span>
}

export function TemaBadge({ tema, ativo = false, onClick }) {
  const cor = corDoTema(tema)
  const estilo = `rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition duration-200 ${
    ativo ? cor.ativo : cor.base
  }`

  if (!onClick) {
    return <span className={estilo}>{tema}</span>
  }

  return (
    <button type="button" onClick={onClick} aria-pressed={ativo} className={`${estilo} hover:-translate-y-0.5`}>
      {tema}
    </button>
  )
}

// O brilho segue o cursor: a posição é guardada em variáveis CSS, sem re-renderizar o card.
function acompanharCursor(evento) {
  const area = evento.currentTarget.getBoundingClientRect()
  evento.currentTarget.style.setProperty('--x', `${evento.clientX - area.left}px`)
  evento.currentTarget.style.setProperty('--y', `${evento.clientY - area.top}px`)
}

export default function ResearchCard({ pesquisa }) {
  const { idioma, t } = useIdioma()
  const textos = pesquisa[idioma]
  const venue = pesquisa.venue[idioma]
  const links = conteudo[pesquisa.slug]?.links ?? []
  const temasVisiveis = pesquisa.temas.slice(0, TEMAS_NO_CARD)
  const temasOcultos = pesquisa.temas.length - temasVisiveis.length

  return (
    <article
      onMouseMove={acompanharCursor}
      className="group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-sm transition duration-300 hover:border-neutral-400 hover:shadow-xl sm:flex-row sm:items-start dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-neutral-600"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(360px circle at var(--x, 50%) var(--y, 0%), rgba(120, 113, 108, 0.12), transparent 70%)',
        }}
      />

      {pesquisa.imagem && (
        <Link
          to={`/pesquisas/${pesquisa.slug}`}
          className="relative w-full shrink-0 overflow-hidden rounded-md shadow-md ring-1 ring-neutral-200 sm:w-60 dark:ring-neutral-800"
        >
          <img
            src={pesquisa.imagem}
            alt={`${t('primeiraPagina')}: ${textos.titulo}`}
            loading="lazy"
            className="block w-full transition duration-500 group-hover:scale-[1.02]"
          />
        </Link>
      )}

      <div className="relative flex min-w-0 flex-1 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="font-display text-4xl leading-none tracking-tight">{pesquisa.ano ?? t('projeto')}</p>
            {venue && <p className="mt-2 text-base font-medium text-neutral-700 dark:text-neutral-300">{venue}</p>}
          </div>
          {textos.status && <StatusBadge status={textos.status} projeto={pesquisa.projeto} />}
        </div>

        <Link to={`/pesquisas/${pesquisa.slug}`} className="mt-4 block">
          <h3 className="font-display text-2xl leading-snug underline-offset-4 decoration-neutral-400 transition group-hover:underline">
            {textos.titulo}
          </h3>
        </Link>
        {textos.subtitulo && <p className="mt-1 text-sm italic text-neutral-500 dark:text-neutral-400">{textos.subtitulo}</p>}

        {textos.resumo && (
          <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            <span className="font-medium text-neutral-800 dark:text-neutral-200">{t('resumoLabel')}. </span>
            {textos.resumo}
          </p>
        )}

        {pesquisa.temas.length > 0 && (
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {temasVisiveis.map((tema) => (
              <TemaBadge key={tema} tema={tema} />
            ))}
            {temasOcultos > 0 && <span className="px-1 text-xs text-neutral-400">+{temasOcultos}</span>}
          </div>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5 text-sm">
          {links.map((link) => (
            <a
              key={link.tipo}
              href={link.href}
              target={link.href.startsWith('/') ? undefined : '_blank'}
              rel={link.href.startsWith('/') ? undefined : 'noopener noreferrer'}
              download={link.tipo === 'pdf' ? '' : undefined}
              className="font-medium text-neutral-700 underline-offset-4 hover:underline dark:text-neutral-300"
            >
              {t(RECURSOS[link.tipo])} {link.tipo === 'pdf' ? '↓' : '↗'}
            </a>
          ))}
          <Link to={`/pesquisas/${pesquisa.slug}`} className="ml-auto text-neutral-500 transition hover:translate-x-1 hover:text-neutral-900 dark:hover:text-neutral-100">
            {t('verDetalhes')} →
          </Link>
        </div>
      </div>
    </article>
  )
}
