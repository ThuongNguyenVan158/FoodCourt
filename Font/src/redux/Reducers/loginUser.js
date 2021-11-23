import { createSlice } from '@reduxjs/toolkit';

export const loginUserSlice = createSlice ({
    name: 'login',
    initialState: {
        isLogin: false,
        userInfo: {},
    },
    reducers: {
        setLoginAction: (state, action) => {
            const { isLogin, userInfo} = action.payload;
            state.isLogin = isLogin;
            state.userInfo = userInfo;
        },
        delLoginAction: (state) => {
            state.isLogin = false;
            state.userInfo = {};
        },
    }
})

export const { setLoginAction, delLoginAction } = loginUserSlice.actions;
export default loginUserSlice.reducer;