import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
    return (
        <nav>
            <NavLink
                to="/register"
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Sign up
            </NavLink>
            <NavLink
                to="/login"
                exact
                className={s.link}
                activeClassName={s.activeLink}
            >
                Sign in
            </NavLink>
        </nav>
    );
}
