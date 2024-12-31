import React, { createContext } from 'react'
import { useRouter } from 'next/navigation'
import { useEffect , useState , useContext } from 'react'


const AuthContext = createContext<any>(null)

export const  AuthProvider: React.FC<{children:React.ReactNode}>=({children})=> {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(()=>{
    const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    
  },[])


  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{isAuthenticated,logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
