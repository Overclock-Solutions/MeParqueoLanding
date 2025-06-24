import React from "react";
import { AppleIcon, GooglePlayIcon } from "./Icons";

type AppStoreButtonsProps = {
  className?: string;
};

const AppStoreButtons: React.FC<AppStoreButtonsProps> = ({
  className = "",
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <a
        href="https://link.bambai.tech/meparqueo"
        className="bg-black text-white rounded-xl px-6 py-3 flex items-center justify-center hover:bg-neutral-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AppleIcon className="h-7 w-7 mr-3" />
        <div className="flex flex-col">
          <span className="text-xs">Descarga en el</span>
          <span className="text-lg font-semibold -mt-1">App Store</span>
        </div>
      </a>

      {
        <a
          href="https://link.bambai.tech/meparqueo"
          className="bg-black text-white rounded-xl px-6 py-3 flex items-center justify-center hover:bg-neutral-800 transition-colors"
        >
          <GooglePlayIcon className="h-7 w-7 mr-3" />
          <div className="flex flex-col">
            <span className="text-xs">Disponible en</span>
            <span className="text-lg font-semibold -mt-1">Google Play</span>
          </div>
        </a>
      }
    </div>
  );
};

export default AppStoreButtons;
