import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-emerald-700/40">
      <button
        className="w-full flex justify-between items-center py-4 px-6 text-left text-lg font-semibold text-emerald-400 hover:bg-neutral-800 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="px-6 pb-4 text-neutral-300 leading-relaxed">
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;
