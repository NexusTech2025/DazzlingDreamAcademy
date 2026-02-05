import React from 'react';

const ValueCard = ({ item }) => (
  <div className={`group relative ${item.fullWidth ? 'lg:col-span-3 flex justify-center' : ''}`}>
    <div className={`max-w-md w-full`}>
      <div className={`absolute inset-0 bg-${item.color}-100 rounded-3xl rotate-2 translate-y-2 transition-transform group-hover:rotate-4`}></div>
      <div className="relative bg-white rounded-3xl p-8 shadow-paper group-hover:shadow-paper-hover transition-all z-10">
        <span className={`material-symbols-outlined text-${item.color === 'accent' ? 'accent' : item.color + '-600'} text-4xl mb-4`}>{item.icon}</span>
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-sm text-slate-500 mt-1">{item.text}</p>
      </div>
    </div>
  </div>
);

export default ValueCard;
