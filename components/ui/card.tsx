export function Card({ children }: { children: React.ReactNode }) {
  return <div className="border rounded-2xl shadow p-4 bg-white">{children}</div>
}

export function CardContent({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return <div className={className}>{children}</div>
}