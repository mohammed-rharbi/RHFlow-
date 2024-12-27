'use client'
    
import { useContext, useEffect } from 'react'
import { AuthContext } from './authProvider'
import { useRouter } from 'next/navigation'

export default function RouteGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const context = useContext(AuthContext)

    if (!context) {
        return null;
    }

    const { user } = context;

    useEffect(() => {
        if (!user) {
            router.push('/login')
        }
    }, [user, router])

    if (!user) {
        return <div>You are not authorized to access this page</div>
    }

    return children
}