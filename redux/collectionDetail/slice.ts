import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { selectByid } from '../../service/api'

interface CollcetionDetailState {
    loading: boolean;
    error: string | null;
    data: any;
}

const initialState: CollcetionDetailState = {
    loading: true,
    error: null,
    data: [],

};

export const getCollectionDetail = createAsyncThunk(
    "CollectionDetail/getCollectionDetail",
    async (paramaters: {
        collectionId: string
    }, thunkAPI) => {
        const { data } = await selectByid({
            id: paramaters.collectionId,
        });
        console.log(data.data);
        return data.data;

    }

);

export const collectionDetailSlice = createSlice({
    name: 'collectionDetail',
    initialState,
    reducers: {
    },
    extraReducers: {
        [getCollectionDetail.pending.type]: (state) => {
            state.loading = true
        },
        [getCollectionDetail.rejected.type]: (state, action: PayloadAction<string>) => {
            state.loading = false,
            state.error = action.payload;
        },

        [getCollectionDetail.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
        }
    }
});

