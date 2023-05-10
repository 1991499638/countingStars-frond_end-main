import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userInfo } from '../../service/api';

interface UserInfoState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: UserInfoState = {
    loading: true,
    error: null,
    data: [],

};

export const getUserInfo= createAsyncThunk(
    "UserInfo/getUserInfo",
    async (thunkAPI) => {
        const { data } = await userInfo();
        return data.data;
    }
);

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getUserInfo.pending.type]: (state) => {
            state.loading = true
        },
        [getUserInfo.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload;
            
        },

        [getUserInfo.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        }
    }
});

