import { Fragment,FC } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import SearchInput from "../SearchInput/SearchInput.component";
import { handleSearchInputChange } from "../../redux/searchInput/searchInput.reducer";

interface IUserTableHeaderProps{
  columnHeaders:Array<string>,

}

const UserManagementTableHeader:FC<IUserTableHeaderProps> = ({ columnHeaders }) => {
  const dispatch = useAppDispatch();
  const searchInputText = useAppSelector(
    (state) => state.searchInput.searchInputText
  );

  const onHandleSearchInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    dispatch(handleSearchInputChange({ name, value }));
  };
  return (
    <Fragment>
      {columnHeaders.map((columnName, index) => {
        return (
          <th key={index} className="column-header">
            <span>{columnName}</span>
            <SearchInput
              type="text"
              className="search-input"
              name={columnName}
              placeholder={columnName}
              searchInputText={searchInputText}
              onChange={onHandleSearchInputChange}
            />
          </th>
        );
      })}
    </Fragment>
  );
};

export default UserManagementTableHeader;