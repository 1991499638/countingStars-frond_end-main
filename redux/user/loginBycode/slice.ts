import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { loginCode } from '../../../service/api';

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

export const loginBycode = createAsyncThunk(
    "user/loginBypwd",
    async (paramaters: {
        phone: string,
        verifiableCode: string,
    }, thunkAPI) => {
        const { data } = await loginCode({
            phone: paramaters.phone,
            verifiableCode: paramaters.verifiableCode
        });
        return data.token;
    }
);

export const userwithcodeSlice = createSlice({
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
        [loginBycode.pending.type]: (state) => {
            state.loading = true;
        },
        [loginBycode.fulfilled.type]: (state, action) => {
            state.token = action.payload;
            state.loading = false;
            state.error = null;
        },
        [loginBycode.rejected.type]: (state, action: PayloadAction<string | null>) => {
            state.loading = false;
            state.error = action.payload;
        },
    }
});
