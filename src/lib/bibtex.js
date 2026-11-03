const semAcentos = (texto) => texto.normalize('NFD').replace(/[̀-ͯ]/g, '')

// Chave no formato sobrenome + ano + primeira palavra significativa do título, por exemplo "monteiro2026when".
export function chaveBibtex(pub) {
  const sobrenome = semAcentos(pub.authors[0].split(' ').pop()).toLowerCase().replace(/[^a-z]/g, '')
  const palavra = semAcentos(pub.title)
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .find((p) => p.length > 3)
  return `${sobrenome}${pub.year}${palavra ?? ''}`
}

export function gerarBibtex(pub) {
  const tipo = { journal: 'article', book: 'incollection' }[pub.venueType] ?? 'inproceedings'
  const campoVenue = pub.venueType === 'journal' ? 'journal' : 'booktitle'
  const campos = [
    `  title = {${pub.title}}`,
    `  author = {${pub.authors.join(' and ')}}`,
    `  ${campoVenue} = {${pub.venue}}`,
    `  year = {${pub.year}}`,
  ]
  return `@${tipo}{${chaveBibtex(pub)},\n${campos.join(',\n')}\n}`
}
