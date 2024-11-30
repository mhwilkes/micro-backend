import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface Layout {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 bg-gray-100 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;