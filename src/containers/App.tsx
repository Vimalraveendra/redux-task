import React, { useEffect } from "react";

import { columnFilteredData } from "../utils/table/columnFilter.js";

import { fetchUsersAsync, IUserData} from "../redux/users/users.reducer";

import UserManagementTable from "../components/UserManagementTable/UserManagementTable.component";
import Spinner from "../components/Spinner/Spinner.component";

import "./App.css";
import { useAppDispatch, useAppSelector} from "../redux/hook"

const App = () => {
  const isLoading = useAppSelector((state) => state.users.isLoading);
  const usersData = useAppSelector((state) => state.users.usersData);
  const searchInputText = useAppSelector(
    (state) => state.searchInput.searchInputText
  );
  const columnName = useAppSelector((state) => state.searchInput.columnName);
  const dispatch = useAppDispatch();

  console.log('search',searchInputText)

  const filteredUsers:Array<IUserData>   = columnFilteredData(
    usersData,
    searchInputText,
    columnName
  );

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Spinner />
      ) : (
        <UserManagementTable usersData={filteredUsers} isLoading={false} error={null} />
      )}
    </div>
  );
};

export default App;
