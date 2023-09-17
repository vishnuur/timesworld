import React from "react";
import "./index.scss";
export default function index({ flag, name, region }) {
  return (
    <div className="card_wrap">
      <img src={flag}></img>
      <span>
        <h4>{name}</h4>
        <p>{region}</p>
      </span>
    </div>
  );
}
