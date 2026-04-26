type LabelProps = {
    title: string,
    tone?: string,
}
const Label = ({title, tone = 'orange'}: LabelProps) => {
  return (
    <p
        className="uppercase text-xs font-semibold mb-4"
        style={{ color: tone == 'orange' ? 'var(--orange-400)' : 'var(--blue-400)' }}
    >
        {title}
    </p>
  )
}

export default Label
