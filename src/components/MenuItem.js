import React from "react";
import "./MenuItem.css";

function MenuItem({ onClick, label, icon }) {
  return (
    <div className="menu-item" onClick={onClick}>
      {icon && <span className="icon">{icon}</span>} {/* Ícone */}
      <span className="label">{label}</span> {/* Nome */}
    </div>
  );
}

export default MenuItem;
