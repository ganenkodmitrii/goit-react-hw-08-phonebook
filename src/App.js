import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';
import { getIsFetchingCurrentUser } from './redux/auth/auth-selectors';

export default function App() {
    const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrentUser());
    }, [dispatch]);

    return (
        !isFetchingCurrentUser && (
            <Container>
                <AppBar />

                <Switch>
                    <PublicRoute exact path="/">
                        <HomeView />
                    </PublicRoute>

                    <PublicRoute exact path="/register" restricted>
                        <RegisterView />
                    </PublicRoute>

                    <PublicRoute exact path="/login" restricted>
                        <LoginView />
                    </PublicRoute>

                    <PrivateRoute path="/contacts">
                        <ContactsView />
                    </PrivateRoute>
                </Switch>
            </Container>
        )
    );
}
