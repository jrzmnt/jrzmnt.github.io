import { useMemo } from 'react'
import publications, { MY_NAME } from '../data/publications.js'
import { useIdioma } from '../i18n.jsx'

const TAMANHO = 520
const CENTRO = TAMANHO / 2
const RAIO = 200
const ROTULOS_VISIVEIS = 10

// Rede em estrela: você no centro e cada coautor na circunferência. Quanto mais trabalhos em conjunto, maior o círculo.
export default function RedeColaboracoes({ selecionado, onSelecionar }) {
  const { t } = useIdioma()

  const coautores = useMemo(() => {
    const contagem = {}
    for (const pub of publications) {
      for (const autor of pub.authors) {
        if (autor !== MY_NAME) contagem[autor] = (contagem[autor] ?? 0) + 1
      }
    }
    return Object.entries(contagem).sort((a, b) => b[1] - a[1])
  }, [])

  const nos = coautores.map(([nome, trabalhos], i) => {
    const angulo = (2 * Math.PI * i) / coautores.length - Math.PI / 2
    return {
      nome,
      trabalhos,
      x: CENTRO + RAIO * Math.cos(angulo),
      y: CENTRO + RAIO * Math.sin(angulo),
      raio: 5 + trabalhos * 2.5,
      rotulo: i < ROTULOS_VISIVEIS,
    }
  })

  const alternar = (nome) => onSelecionar(selecionado === nome ? null : nome)

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white/60 p-4 backdrop-blur sm:p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
      <svg viewBox={`0 0 ${TAMANHO} ${TAMANHO}`} className="mx-auto w-full max-w-xl" role="img" aria-label={t('redeTitulo')}>
        {nos.map((no) => (
          <line
            key={`linha-${no.nome}`}
            x1={CENTRO}
            y1={CENTRO}
            x2={no.x}
            y2={no.y}
            className={`transition-all duration-300 ${
              selecionado === null || selecionado === no.nome
                ? 'stroke-neutral-400 dark:stroke-neutral-600'
                : 'stroke-neutral-200 dark:stroke-neutral-800'
            }`}
            strokeWidth={selecionado === no.nome ? 2.5 : 1}
          />
        ))}

        {nos.map((no) => {
          const ativo = selecionado === no.nome
          return (
            <g
              key={no.nome}
              role="button"
              tabIndex={0}
              aria-pressed={ativo}
              aria-label={`${no.nome}: ${no.trabalhos}`}
              onClick={() => alternar(no.nome)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && alternar(no.nome)}
              className="cursor-pointer outline-none focus-visible:opacity-100"
            >
              <title>{`${no.nome} · ${no.trabalhos}`}</title>
              <circle
                cx={no.x}
                cy={no.y}
                r={no.raio}
                className={`transition-all duration-300 ${
                  ativo
                    ? 'fill-neutral-900 dark:fill-neutral-100'
                    : 'fill-neutral-200 hover:fill-neutral-400 dark:fill-neutral-700 dark:hover:fill-neutral-500'
                }`}
              />
              {no.rotulo && (
                <text
                  x={no.x}
                  y={no.y + no.raio + 13}
                  textAnchor="middle"
                  className="fill-neutral-600 text-[11px] dark:fill-neutral-400"
                >
                  {no.nome}
                </text>
              )}
            </g>
          )
        })}

        <circle cx={CENTRO} cy={CENTRO} r="34" className="fill-neutral-900 dark:fill-neutral-100" />
        <text x={CENTRO} y={CENTRO + 4} textAnchor="middle" className="fill-white text-[11px] font-medium dark:fill-neutral-900">
          Juarez
        </text>
      </svg>
      <p className="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400">{t('redeIntro')}</p>
    </div>
  )
}
