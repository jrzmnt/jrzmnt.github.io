import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { pesquisas } from '../data/pesquisas.js'
import { useIdioma } from '../i18n.jsx'
import ResearchCard, { TemaBadge } from './ResearchCard.jsx'

export default function ListaPesquisas() {
  const { t } = useIdioma()
  const publicas = useMemo(() => pesquisas.filter((p) => p.publico), [])
  const temas = useMemo(
    () => [...new Set(publicas.flatMap((p) => p.temas))].sort((a, b) => a.localeCompare(b)),
    [publicas],
  )
  const [selecionados, setSelecionados] = useState([])

  // Com mais de um tema selecionado, a lista mostra só os trabalhos que têm todos eles.
  const visiveis = useMemo(
    () => publicas.filter((p) => selecionados.every((tema) => p.temas.includes(tema))),
    [publicas, selecionados],
  )

  const alternar = (tema) =>
    setSelecionados((atual) => (atual.includes(tema) ? atual.filter((x) => x !== tema) : [...atual, tema]))

  return (
    <>
      <div className="rounded-2xl border border-neutral-200 bg-white/60 p-5 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{t('filtrarTemas')}</p>
          {selecionados.length > 0 && (
            <button
              type="button"
              onClick={() => setSelecionados([])}
              className="text-sm text-neutral-600 underline-offset-4 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              {t('limparFiltros')}
            </button>
          )}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {temas.map((tema) => (
            <TemaBadge key={tema} tema={tema} ativo={selecionados.includes(tema)} onClick={() => alternar(tema)} />
          ))}
        </div>
      </div>

      {visiveis.length > 0 ? (
        <motion.div layout className="mt-8 flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {visiveis.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: 'easeOut' }}
              >
                <ResearchCard pesquisa={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <p className="mt-8 text-center text-neutral-500 dark:text-neutral-400">{t('nenhumResultado')}</p>
      )}
    </>
  )
}
