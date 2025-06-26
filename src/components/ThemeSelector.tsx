import { Palette } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useTheme } from '@/contexts/ThemeContext';

interface ThemeSelectorProps {
  compact?: boolean;
}

const ThemeSelector = ({ compact = false }: ThemeSelectorProps) => {
  const { currentTheme, setTheme, simpleThemes, gradientThemes } = useTheme();

  if (compact) {
    return (
      <Select value={currentTheme.id} onValueChange={setTheme}>
        <SelectTrigger className="w-32 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all text-xs">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="bg-black/80 backdrop-blur-xl border-white/20 shadow-2xl">
          {simpleThemes.map((theme) => (
            <SelectItem 
              key={theme.id} 
              value={theme.id} 
              className="text-white hover:bg-white/10 focus:bg-white/10 transition-all cursor-pointer text-xs"
            >
              <div className="flex items-center gap-2">
                <div 
                  className={`w-3 h-3 rounded-full border border-white/20`}
                  style={{
                    background: theme.id === 'dark' 
                      ? 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #1a1a1a 100%)'
                      : theme.id === 'light'
                      ? 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)'
                      : theme.id === 'red'
                      ? 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)'
                      : theme.id === 'blue'
                      ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)'
                      : theme.id === 'green'
                      ? 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)'
                      : '#666'
                  }}
                />
                {theme.name}
              </div>
            </SelectItem>
          ))}
          {gradientThemes.map((theme) => (
            <SelectItem 
              key={theme.id} 
              value={theme.id} 
              className="text-white hover:bg-white/10 focus:bg-white/10 transition-all cursor-pointer text-xs"
            >
              <div className="flex items-center gap-2">
                <div 
                  className={`w-3 h-3 rounded-full border border-white/20`}
                  style={{
                    background: theme.id === 'sunset' 
                      ? 'linear-gradient(135deg, #fb923c 0%, #ef4444 50%, #ec4899 100%)'
                      : theme.id === 'ocean'
                      ? 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 50%, #14b8a6 100%)'
                      : theme.id === 'purple-bliss'
                      ? 'linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fb7185 100%)'
                      : theme.id === 'forest'
                      ? 'linear-gradient(135deg, #4ade80 0%, #10b981 50%, #0d9488 100%)'
                      : theme.id === 'cosmic'
                      ? 'linear-gradient(135deg, #312e81 0%, #7c2d12 50%, #be185d 100%)'
                      : '#666'
                  }}
                />
                {theme.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Palette className="w-5 h-5 text-white" />
        <span className="text-white font-medium">Theme:</span>
      </div>
      <Select value={currentTheme.id} onValueChange={setTheme}>
        <SelectTrigger className="w-48 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all">
          <SelectValue placeholder="Select theme" />
        </SelectTrigger>
        <SelectContent className="bg-black/80 backdrop-blur-xl border-white/20 shadow-2xl">
          <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Simple Colors
          </div>
          {simpleThemes.map((theme) => (
            <SelectItem 
              key={theme.id} 
              value={theme.id} 
              className="text-white hover:bg-white/10 focus:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div 
                  className={`w-4 h-4 rounded-full border border-white/20`}
                  style={{
                    background: theme.id === 'dark' 
                      ? 'linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #1a1a1a 100%)'
                      : theme.id === 'light'
                      ? 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)'
                      : theme.id === 'red'
                      ? 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 50%, #b91c1c 100%)'
                      : theme.id === 'blue'
                      ? 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)'
                      : theme.id === 'green'
                      ? 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)'
                      : '#666'
                  }}
                />
                {theme.name}
              </div>
            </SelectItem>
          ))}
          <div className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">
            Gradient Colors
          </div>
          {gradientThemes.map((theme) => (
            <SelectItem 
              key={theme.id} 
              value={theme.id} 
              className="text-white hover:bg-white/10 focus:bg-white/10 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <div 
                  className={`w-4 h-4 rounded-full border border-white/20`}
                  style={{
                    background: theme.id === 'sunset' 
                      ? 'linear-gradient(135deg, #fb923c 0%, #ef4444 50%, #ec4899 100%)'
                      : theme.id === 'ocean'
                      ? 'linear-gradient(135deg, #60a5fa 0%, #06b6d4 50%, #14b8a6 100%)'
                      : theme.id === 'purple-bliss'
                      ? 'linear-gradient(135deg, #a78bfa 0%, #f472b6 50%, #fb7185 100%)'
                      : theme.id === 'forest'
                      ? 'linear-gradient(135deg, #4ade80 0%, #10b981 50%, #0d9488 100%)'
                      : theme.id === 'cosmic'
                      ? 'linear-gradient(135deg, #312e81 0%, #7c2d12 50%, #be185d 100%)'
                      : '#666'
                  }}
                />
                {theme.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ThemeSelector;
