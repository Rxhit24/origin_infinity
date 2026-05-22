
type BadgeProps = {
  title: string,
  tone?: string,
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}


const Badge = ({title, tone = 'orange', startIcon, endIcon}: BadgeProps) => {
    
    return (
        <>
            <div
            className={"inline-flex items-center gap-2 px-4 py-2 rounded-full animate-slide-up "+ ( tone == 'orange' ? 'glass-orange' : 'glass-blue')}
            style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.05em' }}
            >
                {startIcon && (
                    <span className="flex items-center">
                        {startIcon}
                    </span>
                )}
                {/* <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: 'var(--orange-400)', boxShadow: '0 0 8px var(--orange-glow)' }}
                /> */}
                <span style={{ color: tone == 'orange' ? 'var(--orange-400)' : 'var(--blue-400)' }}>{title}</span>
                {endIcon && (
                    <span className="flex items-center">
                        {endIcon}
                    </span>
                )}
            </div>
        </>
    )
}

export default Badge