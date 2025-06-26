
import { ReactNode } from 'react';
import Sidebar from './Sidebar';
import ThemeSelector from './ThemeSelector';
import { useTheme } from '@/contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { currentTheme } = useTheme();
  
  return (
    <div className={`flex h-screen ${currentTheme.bg} transition-all duration-500`}>
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-4 bg-black/20 backdrop-blur-sm border-b border-white/10">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-2xl font-bold">MasterJi</h1>
            <ThemeSelector />
          </div>
        </div>
        <div className="min-h-full bg-black/10 backdrop-blur-sm">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
