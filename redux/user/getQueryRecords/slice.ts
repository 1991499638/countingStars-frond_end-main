import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getqueryRecords } from '../../../service/api';
interface QueryRecordsState {
    loading: boolean;
    error: string | null;
    data: any | null;
}

const initialState: QueryRecordsState = {
    loading: true,
    error: null,
    data: [],

};

/**
 * createAsyncThunk函数需要传入2个参数
 * 第一个参数是这个action的命名空间
 * 第二个参数则用来处理异步
 */
export const getQueryRecords = createAsyncThunk(
    "getQueryRecords/QueryRecords",
    async () => {
        const { data } = await getqueryRecords();
        return data.data;     
    }
);
/**
 * createSlice函数需要传入3个字段
 * 命名空间的名称
 * 初始化数据initialState
 * reducers（action和reducer）
 */
export const getQueryRecordsSlice = createSlice({
    name: 'getQueryRecords',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getQueryRecords.pending.type]: (state) => {
            state.loading = true
            
        },
        [getQueryRecords.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload;
        },

        [getQueryRecords.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            
        }
    }
});

