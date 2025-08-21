import { ReactNode } from 'react'

export default function MateriLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="materi-layout">
      {children}
    </div>
  )
}