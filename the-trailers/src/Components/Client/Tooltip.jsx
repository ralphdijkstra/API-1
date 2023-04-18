import React from "react";

const Tooltip = ({ text, type, children }) => {
  const [isShown, setIsShown] = React.useState(false);

  const handleMouseEnter = () => {
    setIsShown(true);
  };

  const handleMouseLeave = () => {
    setIsShown(false);
  };

  return (
    <div className="relative">
    <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        {children} 
    </div>
    {isShown && (
        <div class={`absolute -bottom-full z-50 text-sm text-center transition duration-300 ease-in-out`}>
            {text} <strong>{type}</strong>
        </div>
    )}
    </div>
  );
};

export default Tooltip;