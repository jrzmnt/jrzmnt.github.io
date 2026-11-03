import { useIdioma } from '../i18n.jsx'

// Bandeiras em SVG: emoji de bandeira não aparece no Windows.
function BandeiraEUA() {
  const faixas = Array.from({ length: 13 }, (_, i) => i)
  const estrelas = []
  for (let linha = 0; linha < 9; linha++) {
    const colunas = linha % 2 === 0 ? 6 : 5
    for (let coluna = 0; coluna < colunas; coluna++) {
      const x = linha % 2 === 0 ? (coluna + 0.5) * (30.4 / 6) : (coluna + 1) * (30.4 / 6)
      estrelas.push({ x, y: (linha + 0.5) * (21.5 / 9) })
    }
  }

  return (
    <svg viewBox="0 0 76 40" className="h-full w-full" preserveAspectRatio="none" aria-hidden="true">
      <rect width="76" height="40" fill="#ffffff" />
      {faixas.map((i) =>
        i % 2 === 0 ? <rect key={i} x="0" y={i * (40 / 13)} width="76" height={40 / 13} fill="#b22234" /> : null,
      )}
      <rect width="30.4" height="21.5" fill="#3c3b6e" />
      {estrelas.map((estrela, i) => (
        <circle key={i} cx={estrela.x} cy={estrela.y} r="0.9" fill="#ffffff" />
      ))}
    </svg>
  )
}

function BandeiraBrasil() {
  return (
    <svg viewBox="0 0 40 28" className="h-full w-full" aria-hidden="true">
      <rect width="40" height="28" fill="#009c3b" />
      <path d="M20 3.5 36.5 14 20 24.5 3.5 14z" fill="#ffdf00" />
      <circle cx="20" cy="14" r="5.8" fill="#002776" />
      <path d="M14.4 12.6 Q20 16.6 25.6 12.6 L25.6 14.6 Q20 18.6 14.4 14.6 Z" fill="#ffffff" />
    </svg>
  )
}

const opcoes = [
  { codigo: 'en', rotulo: 'English', Bandeira: BandeiraEUA },
  { codigo: 'pt', rotulo: 'Português', Bandeira: BandeiraBrasil },
]

export default function SeletorIdioma() {
  const { idioma, setIdioma, t } = useIdioma()

  return (
    <div role="group" aria-label={t('trocarIdioma')} className="flex items-center gap-2">
      {opcoes.map(({ codigo, rotulo, Bandeira }) => (
        <button
          key={codigo}
          onClick={() => setIdioma(codigo)}
          title={rotulo}
          aria-label={rotulo}
          aria-pressed={idioma === codigo}
          className={`h-5 w-7 overflow-hidden rounded-[3px] shadow-sm ring-offset-2 ring-offset-neutral-50 transition hover:scale-110 dark:ring-offset-neutral-950 ${
            idioma === codigo ? 'opacity-100 ring-2 ring-neutral-900 dark:ring-neutral-100' : 'opacity-60 hover:opacity-100'
          }`}
        >
          <Bandeira />
        </button>
      ))}
    </div>
  )
}
