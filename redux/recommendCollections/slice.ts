import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { collectionList } from '../../service/api';
interface RecommentCollectionListState {
    loading: boolean;
    error: string | null;
    data: any | null;
}

const initialState: RecommentCollectionListState = {
    loading: true,
    error: null,
    data: [],

};

/**
 * createAsyncThunk函数需要传入2个参数
 * 第一个参数是这个action的命名空间
 * 第二个参数则用来处理异步
 */
export const getCollectionList = createAsyncThunk(
    "RecommentCollection/getCollectionList",
    async () => {
        const { data } = await collectionList();
        return data.data;
    }
);
/**
 * createSlice函数需要传入3个字段
 * 命名空间的名称
 * 初始化数据initialState
 * reducers（action和reducer）
 */
export const recommendCollectionSlice = createSlice({
    name: 'recommendCollection',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getCollectionList.pending.type]: (state) => {
            state.loading = true
        },
        [getCollectionList.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload;
        },

        [getCollectionList.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        }
    }
});

