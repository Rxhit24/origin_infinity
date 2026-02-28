type H3Props = {
    title?: string
}
const H3 = ({title}: H3Props) => {
  return (
    <h3
    className="mb-3"
    style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.2rem',
        fontWeight: 600,
        color: 'var(--text-primary)',
    }}
    >
        {title}
    </h3>
)
}

export default H3