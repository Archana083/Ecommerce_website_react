import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../feature/slices/slice"

export const store = configureStore({
    reducer: {
      slider: sliderReducer,  
    },
});