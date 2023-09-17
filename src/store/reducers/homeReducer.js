import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mapData: [],
  currentFilter: "",
  isLoading: true,
};
export const dataSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    isLoadingFn: (state, action) => {
      state.isLoading = action.payload;
    },
    saveMapData: (state, action) => {
      state.mapData = action?.payload;
    },
    fetchHomeData: (state, action) => {
      console.log(action.payload);
    },
    setCurrentFilter: (state, action) => {
      state.currentFilter = action.payload;
    },
  },
});
export const { saveMapData, fetchHomeData, setCurrentFilter, isLoadingFn } =
  dataSlice.actions;
export default dataSlice.reducer;
