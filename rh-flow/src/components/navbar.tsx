'use client';

import { useContext } from 'react';
import { AuthContext } from './authProvider';

export default function Navbar() {
  const context = useContext(AuthContext);

  if (!context) {
    return null;
  }

  const { user, logout } = context;

  return (
    <nav>
      {user ? (
        <>
          <span>Welcome, {user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        
        <div className="flex justify-center items-center h-screen">
        <a href="/login">Login</a>
        </div>
        
      )}
    </nav>
  );
}
