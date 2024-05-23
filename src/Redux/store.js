import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import userReducer from './userSlice';
import { persistStore } from 'redux-persist';

const userInfoPersistConfig = {
    key: 'userInfo',
    storage,
    version: 1,
};

const persistedUserReducer = persistReducer(userInfoPersistConfig, userReducer);

export const store = configureStore({
    reducer: {
        userInfo: persistedUserReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
