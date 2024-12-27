'use client'
import { useState } from 'react'
import React from 'react'
import fetcher from '@/lib/clientFetcher'
import { useRouter } from 'next/navigation'


export default function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')
    const router = useRouter()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        try {
            const response = await fetcher.post('/auth/register', formData)
            router.push('/login')
            console.log(response)
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
    <p className="text-center text-3xl text-gray-300 mb-4">Register</p>
    
    <div className="flex gap-2">   
    <input name="firstName" onChange={handleChange} type="text" placeholder="First Name" className="bg-slate-900 w-1/2 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" />
    <input name="lastName" onChange={handleChange} type="text" placeholder="Last Name" className="bg-slate-900 w-1/2 rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" />
    </div>

    <input name="email" onChange={handleChange} className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Email"/>
    <input name="password" onChange={handleChange} className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Password"/>
    <input name="confirmPassword" onChange={handleChange} className="bg-slate-900 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Confirm password"/>
    <label className="flex cursor-pointer items-center justify-between p-1 text-slate-400">
      Accept terms of use
      <div className="relative inline-block">
        <input className="peer h-6 w-12 cursor-pointer appearance-none rounded-full border border-gray-300 bg-gary-400 checked:border-green-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2" type="checkbox"/>
        <span className="pointer-events-none absolute left-1 top-1 block h-4 w-4 rounded-full bg-slate-600 transition-all duration-200 peer-checked:left-7 peer-checked:bg-green-300"></span>
      </div>
    </label>
    <button type="submit" className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Register</button>
  </div>
</div>
</form>
</div>
  )
}
