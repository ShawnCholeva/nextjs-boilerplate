import { useState } from "react";

import MobileCloseSvg from "../icons/MobileCloseIcon";
import MobileOpenSvg from "../icons/MobileOpenIcon";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getMobileOpenButton = () =>
    isMobileMenuOpen ? (
      <MobileCloseSvg onClick={() => setIsMobileMenuOpen(false)} />
    ) : (
      <MobileOpenSvg onClick={() => setIsMobileMenuOpen(true)} />
    );

  return (
    <header id="al_header" role="banner" className="@relative @shadow-lg">
      <div className="@px-3 @py-4 @mx-auto">
        <div className="@flex @justify-between @items-center">
          <div>
            <img
              src="https://media.angi.com/s3fs-public/Angi-logo-Orange.svg"
              alt="Angi"
            />
          </div>
          {getMobileOpenButton()}
        </div>
      </div>
    </header>
  );
};

export default Header;
