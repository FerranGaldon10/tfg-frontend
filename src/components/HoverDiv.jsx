import React from 'react';

const HoverDiv = ({ text }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`p-2 pb-5 font-bold ${isHovered ? 'text-white text-6xl md:text-3xl' : 'text-gray-700 text-6xl md:text-3xl'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{text}</p>
    </div>
  );
};

export default HoverDiv;