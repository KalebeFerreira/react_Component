import React from "react";
import "./MenuItem.css";

function MenuItem({ onClick, label }) {
  return <div onClick={onClick}>{label}</div>;
}

export default MenuItem;
