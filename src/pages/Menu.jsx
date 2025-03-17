import React from "react";
import MenuSection from "../components/MenuSection";
import cakeData from "../data/cakeData";
import pastriesData from "../data/pastriesData";

const Menu = () => {
  return (
    <div>
      <MenuSection title="Cakes" items={cakeData} />
      <MenuSection title="Pastries" items={pastriesData} />
    </div>
  );
};

export default Menu;
