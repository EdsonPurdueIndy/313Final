import React from "react";

const Tooltip = ({ children, content }) => {
  console.log(content);

  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
