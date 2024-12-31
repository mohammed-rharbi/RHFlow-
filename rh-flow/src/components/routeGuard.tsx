'use client'
    
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../app/context/authProvider'

export default function RouteGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const { isAuthenticated } = useAuth()

  
    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login')
        }
    }, [isAuthenticated, router])

    if (!isAuthenticated) {
        return <div>You are not authorized to access this page</div>
    }

    return children
}

