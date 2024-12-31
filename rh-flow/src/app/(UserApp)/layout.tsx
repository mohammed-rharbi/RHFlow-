import React from 'react'
import Navbar from '@/components/navbar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Navbar />
        <div className='pt-14'>
            {children}
        </div>
    </div>
  )
}
