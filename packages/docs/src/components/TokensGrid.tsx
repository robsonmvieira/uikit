import '../styles/tokens-grid.css'

export type IToken = {
  tokens: Record<string, string>
  hasRemValue?: boolean
}
export function TokensGrid({ tokens, hasRemValue = false }: IToken) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(([name, value]) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{value}</td>
            {hasRemValue && (
              <td>{parseFloat(value.replace('rem', '')) * 16}px</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
