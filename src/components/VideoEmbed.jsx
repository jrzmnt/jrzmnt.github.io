export default function VideoEmbed({ id, titulo }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
      <div className="aspect-video w-full bg-neutral-100 dark:bg-neutral-900">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}`}
          title={titulo}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <figcaption className="px-4 py-3 text-sm text-neutral-600 dark:text-neutral-400">{titulo}</figcaption>
    </figure>
  )
}
