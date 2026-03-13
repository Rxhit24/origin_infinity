
export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
      <>
          <div className="min-h-[80px]"></div>
          <div
            style={{
            position: 'fixed',
            inset: 0,
            background: `
                radial-gradient(ellipse at 15% 40%, rgba(249,115,22,0.18) 0%, transparent 55%),
                radial-gradient(ellipse at 85% 15%, rgba(59,130,246,0.18) 0%, transparent 55%),
                radial-gradient(ellipse at 55% 85%, rgba(234,88,12,0.12) 0%, transparent 50%),
                radial-gradient(ellipse at 90% 70%, rgba(29,78,216,0.12) 0%, transparent 50%)
            `,
            pointerEvents: 'none',
            zIndex: -1,
            }}
        />
          {children}
      </>
  )
}