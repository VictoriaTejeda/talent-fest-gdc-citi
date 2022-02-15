import React from "react";
import { LateralMenuHome } from "./LateralMenuHome";
import { ModalSia } from "./modal/ModalSia";
import { OfertasHome } from "./OfertasHome";

export const Main = ({ resultRetirement }) => {
  return (
    <main>
      <div className="main-container">
      <OfertasHome resultRetirement={resultRetirement} />
      <LateralMenuHome />
      <ModalSia />
      </div>
      
    </main>
  );
};

