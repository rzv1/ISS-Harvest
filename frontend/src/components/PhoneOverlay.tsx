import React, { useState, useEffect } from 'react';

interface PhoneOverlayProps {
  children: React.ReactNode;
}

export const PhoneOverlay: React.FC<PhoneOverlayProps> = ({ children }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* MOBILE VIEW (max-width: 639px): No overlay, full screen rendering */}
      <div className="sm:hidden w-full min-h-screen bg-[#f3f5ef] dark:bg-[#121512] flex flex-col">
        {children}
      </div>

      {/* DESKTOP / TABLET VIEW (min-width: 640px): Centered Smartphone Frame Overlay */}
      <div className="hidden sm:flex min-h-screen w-full bg-[#121811] items-center justify-center p-4 md:p-8 font-sans antialiased select-none relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="fixed inset-0 bg-radial from-[#2d3a27]/30 via-[#121811] to-black pointer-events-none" />

        {/* Phone outer wrapper with side buttons */}
        <div className="relative w-[390px] h-[844px] flex items-center justify-center z-10 my-auto">
          
          {/* Left Side Hardware Buttons (Volume Up/Down) */}
          <div className="absolute -left-[14px] top-28 w-[4px] h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-md shadow-md" />
          <div className="absolute -left-[14px] top-44 w-[4px] h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-l-md shadow-md" />
          {/* Right Side Hardware Button (Power Button) */}
          <div className="absolute -right-[14px] top-36 w-[4px] h-16 bg-gradient-to-l from-gray-600 to-gray-800 rounded-r-md shadow-md" />

          {/* Main Phone Body Frame */}
          <div className="w-[390px] h-[844px] bg-[#1a1d18] border-[12px] border-[#282d25] rounded-[48px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] flex flex-col relative overflow-hidden ring-1 ring-white/10">
            
            {/* Top Notch / Dynamic Island */}
            <div className="absolute top-0 inset-x-0 h-10 flex justify-center items-center z-50 pointer-events-none">
              <div className="w-28 h-5 bg-black rounded-full flex items-center justify-between px-3 shadow-inner">
                {/* Camera Lens */}
                <div className="w-2.5 h-2.5 bg-[#0a0d14] rounded-full border border-gray-800 flex items-center justify-center">
                  <div className="w-1 h-1 bg-[#1a2638] rounded-full" />
                </div>
                {/* Speaker Dot */}
                <div className="w-3 h-1 bg-[#1f242b] rounded-full" />
              </div>
            </div>

            {/* Status Bar */}
            <div className="h-10 w-full pt-1 px-7 flex justify-between items-center z-40 bg-transparent text-gray-800 dark:text-gray-200 text-xs font-semibold tracking-tight shrink-0 select-none pointer-events-none">
              {/* Clock */}
              <span>{time || '9:41'}</span>

              {/* Status Icons */}
              <div className="flex items-center space-x-1.5">
                {/* Signal Strength */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 3L2 13h10v8l10-10H12V3z" opacity="0.3" />
                  <path d="M2 22h20V2L2 22z" />
                </svg>
                {/* Wi-Fi Icon */}
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98C20.93 5.9 16.69 4 12 4z" />
                </svg>
                {/* Battery Icon */}
                <div className="w-5 h-2.5 border border-current rounded-[3px] p-[1px] flex items-center">
                  <div className="w-full h-full bg-current rounded-[1px]" />
                </div>
              </div>
            </div>

            {/* Phone Inner Screen Viewport */}
            <div className="flex-1 w-full bg-[#f3f5ef] dark:bg-[#121512] overflow-y-auto overflow-x-hidden relative flex flex-col scrollbar-none">
              {children}
            </div>

            {/* Bottom iOS Home Indicator Bar */}
            <div className="h-5 w-full bg-transparent flex items-center justify-center shrink-0 z-40 pointer-events-none">
              <div className="w-32 h-1 bg-gray-400 dark:bg-gray-600 rounded-full" />
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
