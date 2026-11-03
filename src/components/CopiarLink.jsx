import { useEffect, useState } from 'react'
import { useIdioma } from '../i18n.jsx'

// Copia o endereço da página atual, que já aponta para a pesquisa aberta.
export default function CopiarLink() {
  const { t } = useIdioma()
  const [copiado, setCopiado] = useState(false)

  useEffect(() => {
    if (!copiado) return undefined
    const tempo = setTimeout(() => setCopiado(false), 2000)
    return () => clearTimeout(tempo)
  }, [copiado])

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopiado(true)
    } catch {
      // Sem permissão de área de transferência, o botão simplesmente não confirma a cópia.
    }
  }

  return (
    <button
      type="button"
      onClick={copiar}
      className="rounded-full border border-neutral-300 px-4 py-1.5 text-sm font-medium text-neutral-600 transition hover:border-neutral-900 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-300 dark:hover:text-neutral-100"
    >
      {copiado ? t('linkCopiado') : t('copiarLink')}
    </button>
  )
}
