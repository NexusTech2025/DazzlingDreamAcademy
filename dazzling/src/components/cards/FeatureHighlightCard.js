import React from 'react';

const FeatureHighlightCard = ({ item }) => {
  return (
    <div className="flex items-start gap-4">
      <div
        className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-primary">{item.icon}</span>
      </div>
      <div>
        <h4 className="text-white font-bold mb-1">{item.title}</h4>
        <p className="text-slate-400 text-sm">{item.text}</p>
      </div>
    </div>
  );
};

export default FeatureHighlightCard;
