import { createSlice } from "@reduxjs/toolkit";
import { getMapData } from "./thunks";
import { IMapState } from "./types";

const initialState: IMapState = {
  mapData: [],
  mapDataLoaded: false,
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    clearMapData(state) {
      state.mapData = initialState.mapData;
      state.mapDataLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMapData.pending, (state, action) => {
      return {
        ...state,
        mapData: initialState.mapData,
        mapDataLoaded: false,
      };
    });
    builder.addCase(getMapData.fulfilled, (state, action) => {
      return {
        ...state,
        mapData: action.payload,
        mapDataLoaded: true,
      };
    });
    builder.addCase(getMapData.rejected, (state) => {
      return {
        ...state,
        mapDataLoaded: true,
      };
    });
  },
});

export const { clearMapData } = mapSlice.actions;
export default mapSlice.reducer;
