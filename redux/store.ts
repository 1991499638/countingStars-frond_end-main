import { createStore, applyMiddleware } from 'redux';
// import recommentCollectionsReducer from './recommendCollections/recommentCollectionsReducer';
import thunk from "redux-thunk";
import { collectionDetailSlice } from './collectionDetail/slice';
import { recommendCollectionSlice } from './recommendCollections/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/loginBypwd/slice';
import { userwithcodeSlice } from './user/loginBycode/slice';
import { ownedCollectionSlice } from './ownedCollections/slice';
import { userInfoSlice } from './user/slice';
import { searchCollectionSlice } from './searchCollections/slice';
import { getQueryRecordsSlice} from './user/getQueryRecords/slice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
    whitelist:["user"]
}

const rootReducer = combineReducers({
    recommentCollections: recommendCollectionSlice.reducer,
    collectionDetail: collectionDetailSlice.reducer,
    user: userSlice.reducer,
    userwithcode: userwithcodeSlice.reducer,
    ownedCollections: ownedCollectionSlice.reducer,
    userInfo:userInfoSlice.reducer,
    searchCollections:searchCollectionSlice.reducer,
    getQueryRecords:getQueryRecordsSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducer,applyMiddleware(thunk));
const store = configureStore({
    reducer: persistedReducer,
    devTools: true
});

const persistor = persistStore(store)
//通过反向注入导出sotre类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default { store, persistor };