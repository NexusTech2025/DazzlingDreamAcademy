import React from 'react';

const TeachingApproachCard = ({ item }) => {
  return (
    <div className="group relative" style={{maxWidth:"300px"}}>
      <div className={`absolute inset-0 bg-${item.color}-100 dark:bg-${item.color}-900/30 rounded-3xl ${item.rotation} translate-y-2 z-0 transition-transform group-hover:${item.rotation === 'rotate-1' ? 'rotate-3' : item.rotation === 'rotate-3' ? 'rotate-6' : '-rotate-4'}`}></div>
      <div className="relative bg-card-bg dark:bg-card-dark rounded-3xl p-5 pt-8 pb-8 shadow-paper group-hover:shadow-paper-hover transition-all duration-300 z-10 overflow-visible">
        <div className={`absolute -top-5 -right-4 w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-primary rounded-xl flex items-center justify-center shadow-floating animate-float z-30 ring-4 ring-surface-light dark:ring-surface-dark`}>
          <span className="material-symbols-outlined text-white dark:text-white hover:text-accent transition-colors">{item.floatIcon}</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className={`w-14 h-14 bg-${item.color}-50  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
            <span className={`material-symbols-outlined text-${item.color === 'amber' ? 'accent' : 'secondary'} dark:text-${item.color}-300 text-3xl`}>{item.icon}</span>
          </div>
          <h3 className="font-bold text-primary  text-sm mb-1">{item.title}</h3>
          <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{item.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default TeachingApproachCard;
