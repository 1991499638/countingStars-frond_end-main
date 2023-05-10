import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { loginPwd } from '../../../service/api';

interface UserState {
    loading: boolean;
    error: string | null;
    token: string | null;
}

const initialState: UserState = {
    loading: false,
    error: null,
    token: null,
};

export const loginBypwd = createAsyncThunk(
    "user/loginBypwd",
    async (paramaters: {
        phone: string,
        password: string,
    }, thunkAPI) => {
        const { data } = await loginPwd(
            {
                phone: paramaters.phone,
                password: paramaters.password
            })
        return data.token;
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = null;
            state.error = null;
            state.loading = false;
        },
    },
    extraReducers: {
        [loginBypwd.pending.type]: (state) => {
            state.loading = true;
        },
        [loginBypwd.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        [loginBypwd.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});
