import React from 'react';

const FAQItem = ({ item }) => {
  return (
    <div className="border border-slate-200 rounded-lg overflow-hidden">
      <input className="hidden accordion-toggle" id={item.id} type="checkbox" />
      <label
        className="flex items-center justify-between p-5 cursor-pointer bg-white hover:bg-slate-50 transition-colors"
        htmlFor={item.id}
      >
        <span className="font-bold text-navy-900">{item.question}</span>
        <span
          className="material-symbols-outlined text-primary accordion-icon"
          >expand_more</span
        >
      </label>
      <div className="accordion-content bg-slate-50 px-5 pb-5 text-slate-600">
        {item.answer}
      </div>
    </div>
  );
};

export default FAQItem;
