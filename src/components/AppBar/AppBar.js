import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';

export default function AppBar() {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <header className={s.header}>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
}
