export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUsername = state => state.auth.user.name;

export const getIsFetchingCurrentUser = state =>
    state.auth.isFetchingCurrentUser;

export const getErrorLogin = state => state.auth.errorLogin;

export const getErrorRegister = state => state.auth.errorRegister;
