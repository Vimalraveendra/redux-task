import { createSlice } from "@reduxjs/toolkit";


export interface ISearchInput{
  searchInputText:string,
  columnName:string,
}

const SEARCH_INPUT_INITIAL_STATE:ISearchInput = {
  searchInputText:"",
  columnName: "",
};

export const searchInputSlice= createSlice({
  name:'searchInput',
  initialState:SEARCH_INPUT_INITIAL_STATE,
  reducers:{
    handleSearchInputChange:(state,action)=>{
     state.columnName= action.payload.name;
      state.searchInputText=action.payload.value;
    }
  }
})

export const {handleSearchInputChange} = searchInputSlice.actions
export const searchInputReducer= searchInputSlice.reducer;