import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/calendarSlice";
import { uiSlice } from "./ui/uiSlice";


export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
    },
    //Para arreglar el problema con las fechas
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }) 
})