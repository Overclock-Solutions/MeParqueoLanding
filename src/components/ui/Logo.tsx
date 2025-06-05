import React from "react";

type LogoProps = {
  className?: string;
  inverted?: boolean;
};

const Logo: React.FC<LogoProps> = ({ className = "", inverted = false }) => {
  return (
    <img
      src="https://res.cloudinary.com/dxmwapxmo/image/upload/v1746335731/meparking%20logo.jpg"
      alt="Me Parqueo"
      className={`h-10 w-auto rounded-lg ${className}`}
    />
  );
};

export default Logo;
