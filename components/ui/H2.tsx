type H2Props = {
    title?: string
    gradientTitle?: string
    newLine?: boolean
}
const H2 = ({title, gradientTitle, newLine = true}: H2Props) => {
  return (
    <h2
        style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
        }}
    >
        {title}
        { newLine ? <br /> : ' '}
        <span className="gradient-text">{gradientTitle}</span>
    </h2>
  )
}

export default H2