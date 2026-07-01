import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice"
import draftReducer from "./slices/draftSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
    reducer:{
        auth: authReducer,
        draft: draftReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;