import React from "react";

const Header = ({ backgroundPic, fontFamily = "'Inter', sans-serif", textColor = "text-emerald-200" }) => {
  return (
    <header
      className={`header text-center py-8 bg-cover bg-center ${textColor}`}
      style={{ backgroundImage: `url(${backgroundPic})`, fontFamily: fontFamily }}
    >
      <h1 className="text-6xl font-bold">
        ByteForge
      </h1>
      <p className="text-lg">
        Where Performance Is Built.
      </p>
    </header>
  );
};

export default Header;
