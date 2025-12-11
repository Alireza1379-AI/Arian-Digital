import React, { useState, useEffect } from 'react';
import { CategoryType, CategoryData } from './types';
import { APP_DATA } from './constants';
import ServiceCard from './components/ServiceCard';
import { ArrowRight, Home, Smartphone, Mail, Instagram, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<CategoryType>(CategoryType.HOME);
  const [activeCategory, setActiveCategory] = useState<CategoryData | null>(null);

  // Sound effect simulation (optional logic hook)
  const playClick = () => {
    // Placeholder for sound effect
  };

  const handleCategorySelect = (category: CategoryData) => {
    playClick();
    setActiveCategory(category);
    setCurrentView(category.id);
  };

  const goHome = () => {
    playClick();
    setCurrentView(CategoryType.HOME);
    setActiveCategory(null);
  };

  const goMenu = () => {
    playClick();
    setCurrentView(CategoryType.MENU);
    setActiveCategory(null);
  };

  // Render Home Screen
  if (currentView === CategoryType.HOME) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-fuchsia-600 to-pink-600 flex flex-col items-center justify-center p-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-xl animate-bounce"></div>

        <div className="z-10 text-center flex flex-col items-center">
            {/* Logo placeholder - using CSS for the Triangle Logo shape from PDF */}
            <div className="relative w-32 h-32 mb-8 animate-[spin_10s_linear_infinite]">
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-tr-[40px] rounded-bl-[40px] transform rotate-45 border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.5)]"></div>
                 <div className="absolute inset-4 bg-slate-900 rounded-tr-[30px] rounded-bl-[30px] transform rotate-45 flex items-center justify-center">
                    <div className="text-4xl">💎</div>
                 </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] mb-2 tracking-tighter">
              ARIAN
            </h1>
            <h2 className="text-4xl md:text-6xl font-black text-cyan-300 drop-shadow-[4px_4px_0_rgba(0,0,0,0.5)] mb-12 tracking-tighter">
              DIGITAL
            </h2>

            <button 
                onClick={goMenu}
                className="group relative px-10 py-4 bg-yellow-400 hover:bg-yellow-300 text-slate-900 text-2xl font-black rounded-xl border-b-8 border-yellow-600 active:border-b-0 active:translate-y-2 transition-all pixel-shadow"
            >
                <span className="flex items-center gap-3">
                    شروع کنید <ArrowRight className="group-hover:-translate-x-1 transition-transform" />
                </span>
            </button>
            
            <div className="mt-12 text-white/80 text-sm font-bold bg-black/20 px-6 py-2 rounded-full backdrop-blur-sm">
                بهترین خدمات دیجیتال و کامپیوتری در منطقه
            </div>
        </div>
      </div>
    );
  }

  // Render Menu Screen
  if (currentView === CategoryType.MENU) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800 p-4 pb-20 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
            <header className="flex justify-between items-center mb-8 pt-4">
                <button onClick={goHome} className="bg-white/10 p-2 rounded-lg hover:bg-white/20 border-2 border-white/30">
                    <Home className="text-white" />
                </button>
                <h2 className="text-4xl font-black text-white drop-shadow-[3px_3px_0_#000]">خدمـات مـا</h2>
                <div className="w-10"></div> {/* Spacer */}
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {APP_DATA.map((cat, idx) => (
                    <button 
                        key={cat.id}
                        onClick={() => handleCategorySelect(cat)}
                        className={`${cat.color} group relative p-6 rounded-2xl border-4 border-white/20 hover:border-white transition-all transform hover:-translate-y-1 active:translate-y-0 active:scale-95 shadow-lg overflow-hidden`}
                        style={{ animationDelay: `${idx * 50}ms` }}
                    >
                        {/* Pixel Pattern Overlay */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pixel-weave.png')] opacity-10"></div>
                        
                        <div className="relative z-10 flex items-center justify-between">
                            <div className="text-right">
                                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{cat.title}</h3>
                                <p className="text-white/80 text-sm">{cat.items.length} خدمت</p>
                            </div>
                            <div className="text-5xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {cat.icon}
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            
             {/* Contact Mini Footer */}
            <div className="mt-12 bg-black/30 rounded-xl p-6 text-center border-2 border-white/10 backdrop-blur-md">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">تماس با ما</h3>
                <div className="flex flex-col md:flex-row justify-center gap-4 text-white/90">
                    <div className="flex items-center justify-center gap-2">
                        <Smartphone size={20} className="text-green-400"/>
                        <span dir="ltr">0939 198 6783</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                         <Mail size={20} className="text-red-400"/>
                         <span>alizeo.javidan@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                         <Instagram size={20} className="text-pink-400"/>
                         <span>@developer_front.exe</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

  // Render Specific Category (Table/List View)
  return (
    <div className={`min-h-screen ${activeCategory?.color || 'bg-slate-800'} transition-colors duration-500`}>
        {/* Background Pattern */}
        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto min-h-screen flex flex-col">
            {/* Header */}
            <div className="bg-black/20 backdrop-blur-md p-4 sticky top-0 z-20 shadow-lg border-b border-white/10">
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                         <button onClick={goMenu} className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 border-b-4 border-slate-300 active:border-b-0 active:translate-y-1">
                            <Menu size={18} /> منو
                        </button>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white text-right truncate flex-1 pr-4">
                        {activeCategory?.title} {activeCategory?.icon}
                    </h2>
                </div>
            </div>

            {/* Content List */}
            <div className="flex-1 p-4 pb-24 overflow-y-auto">
                 {/* Decorative cloud or element */}
                 <div className="flex justify-center mb-6">
                    <div className="bg-white/20 px-6 py-2 rounded-full border border-white/30 text-white/90 text-sm">
                        قیمت‌ها به تومان می‌باشد
                    </div>
                 </div>

                {activeCategory?.items.map((item, index) => (
                    <ServiceCard key={index} item={item} delay={index * 50} />
                ))}

                {/* Footer Note */}
                <div className="mt-8 text-center text-white/70 text-xs bg-black/20 p-4 rounded-lg">
                    <p>قیمت‌ها تقریبی است و ممکن است بر اساس نوسانات بازار تغییر کند.</p>
                    <p className="mt-1">برای پروژه‌های برنامه‌نویسی و شبکه، مشاوره اولیه رایگان است.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default App;