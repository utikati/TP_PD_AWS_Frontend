import { ISearchState, InitialSearchData } from "./types";
import { createSlice } from "@reduxjs/toolkit";
import { getSearchList } from "./thunks";

const initialState: ISearchState = {
  searchList: InitialSearchData,
  searchListLoaded: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearchList(state) {
      state.searchList = initialState.searchList;
      state.searchListLoaded = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchList.fulfilled, (state, action) => {
      return {
        ...state,
        searchList: action.payload,
        searchListLoaded: true,
      };
    });
  },
});

export const { clearSearchList } = searchSlice.actions;
export default searchSlice.reducer;
