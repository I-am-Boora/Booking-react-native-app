import { configureStore } from "@reduxjs/toolkit";
import SavedReducer from "./SavedRedux";
export default configureStore({
  reducer: {
    booking: SavedReducer,
  },
});
