import { createSlice } from '@reduxjs/toolkit';
import { register, login, logOut, fetchCurrentUser } from './auth-operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
    errorLogin: null,
    errorRegister: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.pending](state, action) {
            state.errorRegister = null;
        },
        [register.rejected](state, action) {
            state.errorRegister = 'Registration error. Please try again';
        },
        [login.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [login.pending](state, action) {
            state.errorLogin = null;
        },
        [login.rejected](state, action) {
            state.errorLogin = 'Something went wrong. Please try again';
        },
        [logOut.fulfilled](state, action) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },
        [fetchCurrentUser.pending](state, action) {
            state.isFetchingCurrentUser = true;
        },
        [fetchCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [fetchCurrentUser.rejected](state, action) {
            state.isFetchingCurrentUser = false;
        },
    },
});

export default authSlice.reducer;
