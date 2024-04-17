import "./LandingPage.css";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import HeaderMobile from "../../components/HeaderMobile/HeaderMobile";

function LandingPage() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const handleSetMenuIsVisible = (isVisible) => {
    setMenuIsVisible(isVisible);
    if (isVisible) {
      document.body.classList.add("blur");
    } else {
      document.body.classList.remove("blur");
    }
  };

  return (
    <>
      {menuIsVisible ? (
        <HeaderMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={() => handleSetMenuIsVisible(false)}
        />
      ) : (
        <div className="baseLandingPage">
          <Header
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={() => handleSetMenuIsVisible(true)}
          />
          <div className="Resto"></div>
        </div>
      )}
    </>
  );
}

export default LandingPage;
