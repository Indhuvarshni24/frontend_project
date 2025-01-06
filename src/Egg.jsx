import React from "react";
import HalfBoil from "./HalfBoil";

const Egg = ({ need }) => {
  return (
    <div>
      <h3>Egg Component</h3>
      <HalfBoil need={need} />
    </div>
  );
};

export default Egg;