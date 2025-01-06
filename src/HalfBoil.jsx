import React from "react";
import Stomach from "./Stomach";

const HalfBoil = ({ need }) => {
  return (
    <div>
      <h4>HalfBoil Component</h4>
      <Stomach need={need} />
    </div>
  );
};

export default HalfBoil;