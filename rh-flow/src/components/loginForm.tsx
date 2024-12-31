'use client'

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import fetcher from '@/lib/clientFetcher'


export default function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const response = await fetcher.post('/auth/login', formData);
            localStorage.setItem('token', response.data.user.token)
            localStorage.setItem('userId' , response.data.user.user._id)
            
            router.push('/home')

        } catch (error) {
            setError('Invalid credentials')
        }
    }

  return (

<div className="flex justify-center items-center h-screen">
<form onSubmit={handleSubmit}>

{error && <p className="text-red-500">{error}</p>}
<div className="w-80 rounded-2xl bg-slate-900">
  <div className="flex flex-col gap-2 p-8">

    <p className="text-center text-3xl text-gray-300 mb-4">Login</p>

    <input name="email" onChange={handleChange} className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Email"/>

    <input name="password" onChange={handleChange} className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Password"/>
 
    <button className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Login with google</button>

    <button type="submit" className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Login</button>
    
  </div>
</div>
</form>
</div>

  )
}
