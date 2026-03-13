
type BadgeProps = {
  title: string,
  tone?: string
}


const CardBadge = ({title, tone = 'orange'}: BadgeProps) => {
    
    return (
        <div
            className={"animate-slide-up"}
            style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em' }}
        >
            <span style={{ color: tone == 'orange' ? 'var(--orange-400)' : 'var(--blue-400)' }}>{title}</span>
            
        </div>
    )
}

export default CardBadge