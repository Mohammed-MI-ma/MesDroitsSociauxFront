import React from "react";
import { Link } from "react-router-dom";

import style from "./navItem.module.css";

// Wrap the component with React.memo for performance optimization
const NavItem = React.memo(({ title, to, isActive }) => {
  return (
    <li className={style.navItem}>
      <Link to={to}>
        <Button
          className={`${style.button} ${isActive ? style.active : ""}`}
          type="text"
        >
          {title}
        </Button>
      </Link>
    </li>
  );
});

export default NavItem;
