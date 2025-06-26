
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Folder, FileText, BarChart3, GraduationCap, MessageCircle, User, Settings } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Sidebar = () => {
  const location = useLocation();
  const { currentTheme } = useTheme();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/dashboard' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Folder, label: 'Projects', path: '/projects' },
    { icon: MessageCircle, label: 'Community', path: '/community' },
    { icon: Users, label: 'Peer Reviews', path: '/peer-reviews' },
    { icon: FileText, label: 'Blogs', path: '/blogs' },
    { icon: BarChart3, label: 'Evaluations', path: '/evaluations' }
  ];

  return (
    <div className="w-72 h-screen bg-black/30 backdrop-blur-sm border-r border-white/10 flex flex-col shadow-2xl">
      <div className="p-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B47]/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MasterJi</span>
        </div>
      </div>
      
      <nav className="flex-1 px-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 mb-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] text-white shadow-lg shadow-[#FF6B47]/25' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Icon className={`w-6 h-6 transition-transform duration-200 ${!isActive && 'group-hover:scale-110'}`} />
              <span className="font-medium text-base">{item.label}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-6 border-t border-white/10">
        <div className="flex items-center gap-4 p-4 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-full flex items-center justify-center shadow-lg shadow-[#FF6B47]/20">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div>
            <div className="text-white font-semibold text-base">Jasani Zeel</div>
            <div className="text-gray-300 text-sm">Admin</div>
          </div>
        </div>
        
        {/* <Link to="/profile" className="block mt-4">
          <button className="w-full flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </Link> */}
      </div>
    </div>
  );
};

export default Sidebar;
