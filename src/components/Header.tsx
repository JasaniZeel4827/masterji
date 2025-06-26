
import { Link } from 'react-router-dom';
import { GraduationCap, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import ThemeSelector from './ThemeSelector';

const Header = () => {
  const { currentTheme } = useTheme();
  const { user, logout, isAuthenticated } = useAuth();

  return (
    <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B47] to-[#e55a3d] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B47]/20">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">MasterJi</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
            Courses
          </Link>
          <Link to="/community" className="text-gray-300 hover:text-white transition-colors">
            Community
          </Link>
          <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">
            Blogs
          </Link>
          {isAuthenticated && (
            <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
          )}
        </nav>
        
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <Link to="/login">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 rounded-lg px-6">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] hover:from-[#e55a3d] hover:to-[#d4493a] text-white shadow-lg shadow-[#FF6B47]/25 hover:shadow-xl hover:shadow-[#FF6B47]/30 transition-all duration-200 rounded-lg px-6">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] text-white">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-black/80 backdrop-blur-xl border-white/20" align="end">
                <div className="flex items-center gap-2 p-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.avatar} alt={user?.name} />
                    <AvatarFallback className="bg-gradient-to-r from-[#FF6B47] to-[#e55a3d] text-white text-sm">
                      {user?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-white">{user?.name}</p>
                    <p className="text-xs text-gray-400">{user?.email}</p>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Edit Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-white/10 cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <div className="flex items-center justify-between w-full">
                    <span>Change Theme</span>
                    <ThemeSelector compact />
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem 
                  className="text-red-400 hover:bg-red-500/10 cursor-pointer"
                  onClick={logout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
