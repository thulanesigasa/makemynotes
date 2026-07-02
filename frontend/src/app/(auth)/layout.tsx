export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col relative selection:bg-orange-500/30">
      <main className="flex-1 flex flex-col">
        {children}
      </main>
    </div>
  )
}
