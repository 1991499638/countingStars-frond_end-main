import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { selectByname } from '../../service/api';
interface SearchCollectionState {
    loading: boolean;
    error: string | null;
    data: any ;
}

const initialState: SearchCollectionState = {
    loading: true,
    error: null,
    data: null,

};

export const searchCollections = createAsyncThunk(
    "SearchCollection/searchCollections",
    async (paramaters:{
        name: string
    }, thunkAPI) => {
        const { data } = await selectByname({
            name:paramaters.name,
        });
        return data.data;
    }
);

export const searchCollectionSlice = createSlice({
    name: 'searchCollection',
    initialState,
    reducers: {
        goSearch:(state) =>{
            state.data = null;
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: {
        [searchCollections.pending.type]: (state) => {
            state.loading = true
        },
        [searchCollections.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload;
        },

        [searchCollections.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        }
    }
});

