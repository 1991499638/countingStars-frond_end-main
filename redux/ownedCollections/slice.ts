import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ownedcollection } from '../../service/api';

interface OwnCollcetionState {
    loading: boolean;
    error: string | null;
    data: any[];
}

const initialState: OwnCollcetionState = {
    loading: true,
    error: null,
    data: [],
};


export const getOwnedCollection = createAsyncThunk(
    "OwnedCollection/getOwnedCollection",
    async (thunkAPI) => {
        const { data } = await ownedcollection();
        return data.data;
    }
);

export const ownedCollectionSlice = createSlice({
    name: 'ownedCollections',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getOwnedCollection.pending.type]: (state) => {
            state.loading = true
        },
        [getOwnedCollection.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload;
            
        },

        [getOwnedCollection.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        }
    }
});

