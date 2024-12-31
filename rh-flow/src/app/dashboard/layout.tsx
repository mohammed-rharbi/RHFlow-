import React from 'react';
import SideBar from '@/components/sideBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">

    <SideBar />

    <main className="flex-1 flex flex-col bg-gray-100">
        <header className="px-6 py-4 bg-gray-800 text-white">
          Header Content
        </header>
        <div >{children}</div>
      </main>
    </div>
  );
}
    