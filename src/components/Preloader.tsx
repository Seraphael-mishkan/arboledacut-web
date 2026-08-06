import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Smooth progress simulation up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600); // Allow fade out animation
          }, 300);
          return 100;
        }
        // Random incremental progress steps for natural feel
        const diff = Math.random() * 8 + 4;
        return Math.min(100, prev + diff);
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 flex flex-col justify-center items-center px-4 overflow-hidden select-none"
        >
          {/* Header branding */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center mb-12 sm:mb-16 text-center"
          >
            <img
              src="/logo.png"
              alt="Arboledacut"
              className="h-16 sm:h-20 w-auto object-contain mb-3 drop-shadow-2xl brightness-105"
            />
            <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-tight">
              Arboleda<span className="text-emerald-400">cut</span>
            </h2>
            <p className="text-emerald-200/80 text-xs sm:text-sm font-medium mt-1">
              Preparando el mejor cuidado para tu propiedad...
            </p>
          </motion.div>

          {/* Lawn mower & Grass Progress Bar Container */}
          <div className="relative w-full max-w-xs xs:max-w-sm sm:max-w-lg lg:max-w-xl mx-auto my-6">
            {/* Lawn Mower Image moving with progress */}
            <div
              className="absolute bottom-6 transition-all ease-out duration-100 transform -translate-x-1/2 z-20 pointer-events-none"
              style={{ left: `${progress}%` }}
            >
              <div className="relative">
                {/* Grass blades flying from mower discharge */}
                {progress > 5 && progress < 98 && (
                  <div className="absolute -top-2 -left-6 w-20 h-24 pointer-events-none">
                    {[...Array(10)].map((_, i) => {
                      const grassColors = [
                        '#34d399', '#6ee7b7', '#a7f3d0', '#10b981',
                        '#059669', '#4ade80', '#86efac', '#22c55e',
                        '#15803d', '#bbf7d0',
                      ];
                      const color = grassColors[i % grassColors.length];
                      const bladeWidth = Math.random() * 2 + 1.5;
                      const bladeHeight = Math.random() * 10 + 7;
                      const spreadX = -(Math.random() * 55 + 15);
                      const peakY = -(Math.random() * 40 + 15);
                      const delay = i * 0.04;
                      const duration = Math.random() * 0.4 + 0.5;
                      const spin = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 540 + 180);

                      return (
                        <motion.span
                          key={`grass-${i}-${Math.floor(progress / 3)}`}
                          initial={{
                            x: 0,
                            y: 0,
                            opacity: 0.95,
                            rotate: Math.random() * 90 - 45,
                            scale: 1,
                          }}
                          animate={{
                            x: [0, spreadX * 0.5, spreadX],
                            y: [0, peakY, peakY * 0.3],
                            opacity: [0.95, 0.8, 0],
                            rotate: spin,
                            scale: [1, 0.8, 0.4],
                          }}
                          transition={{
                            duration: duration,
                            delay: delay,
                            ease: 'easeOut',
                            times: [0, 0.4, 1],
                          }}
                          className="absolute block"
                          style={{
                            width: `${bladeWidth}px`,
                            height: `${bladeHeight}px`,
                            backgroundColor: color,
                            borderRadius: `${bladeWidth}px`,
                            top: `${Math.random() * 16 + 4}px`,
                            left: `${Math.random() * 8}px`,
                            boxShadow: `0 0 3px ${color}80`,
                          }}
                        />
                      );
                    })}
                  </div>
                )}

                <img
                  src="/podadora.png"
                  alt="Podadora Arboledacut"
                  className="w-24 sm:w-32 lg:w-36 h-auto object-contain drop-shadow-xl filter brightness-110 contrast-105"
                />
              </div>
            </div>

            {/* Grass Progress Track */}
            <div className="relative w-full h-8 sm:h-10 rounded-full bg-emerald-950/80 border border-emerald-500/30 overflow-hidden shadow-inner flex items-center p-1">
              {/* Uncut grass texture background */}
              <div className="absolute inset-0 bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:8px_8px] opacity-40" />

              {/* Cut grass progress fill */}
              <div
                className="h-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 rounded-full transition-all ease-out duration-100 shadow-md relative overflow-hidden"
                style={{ width: `${progress}%` }}
              >
                {/* Grass shine overlay */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12" />
              </div>
            </div>

            {/* Percentage text */}
            <div className="flex justify-between items-center mt-4 px-2">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                Podando terreno...
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
