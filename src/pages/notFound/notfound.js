import React from "react";
import { Link } from "react-router-dom";

const logo = require("../../images/logo.png");

export const NotFound = () => (
  <div style={{paddingTop: 200, paddingBottom: 200}}>
    <img
      alt="unchained logo"
      style={{ width: 100 }}
      src={logo}
    />

    <div>
      <h2>
        404, Oops!{" "}
        <Link to="/" style={{ color: "#fff" }}>
            Home
        </Link>
      </h2>
    </div>
  </div>
);