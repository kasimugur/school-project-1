import React from 'react'
interface RoutesLayoutProps {
  children: React.ReactNode
}

export default function RoutesLayout({ children }: RoutesLayoutProps) {
  return (
    <>
      <div className="">
        header
      </div>
      {children}
      <div className="">
        footer
      </div>
    </>
  )
}
