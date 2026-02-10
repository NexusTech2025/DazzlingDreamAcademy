import React from 'react';

const StatCard = ({ item }) => {
  return (
    <div className="bg-white dark:bg-navy-800 p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center border border-slate-100 dark:border-navy-700 group">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10 text-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <span className="material-icons-round text-2xl">{item.icon}</span>
      </div>
      <h3 className="font-display font-bold text-4xl text-primary mb-2">
        {item.number}
      </h3>
      <p className="text-slate-600 dark:text-slate-300 font-medium">
        {item.label}
      </p>
    </div>
  );
};

export default StatCard;
