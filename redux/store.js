import { configureStore } from "@reduxjs/toolkit";
import { demoReducer } from "./actions/demoSlice";
import donationSlice, {donationReducer} from "./actions/donation/donationSlice";

export const store = configureStore({
  reducer: { 
    demo: demoReducer,
    donation: donationSlice
   },

});
