import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./AuthNav.module.css";

const classNavLink = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
    [css.link]: !isActive,
  });

const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={classNavLink} to="/register">
        {" "}
        Register{" "}
      </NavLink>
      <NavLink className={classNavLink} to="/login">
        {" "}
        log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
