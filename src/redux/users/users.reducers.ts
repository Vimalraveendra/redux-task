import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export interface IUserData{
  id:number,
  name:string,
  username:string,
  email:string,
  phone:string
}

export interface IUsersDataList{
  isLoading:boolean,
  usersData:Array<IUserData>,
  error:string|null;
}

export const USERS_INITIAL_STATE:IUsersDataList = {
  isLoading: false,
  usersData: [],
  error: null,
};  

export const fetchUsersAsync = createAsyncThunk('users/fetch',async (thunkAPI) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await response.json();
    return usersData;
  } catch (error) {
    console.log(error);
  }
});

export const usersSlice = createSlice({
  name: "users",
  initialState: USERS_INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
      .addCase(fetchUsersAsync.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.usersData=action.payload;
        state.error = null;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "An error occurred";
      });
  },
});

export const {} = usersSlice.actions;
export const usersReducer=usersSlice.reducer;