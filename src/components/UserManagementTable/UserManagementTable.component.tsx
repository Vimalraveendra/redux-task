import UserManagementTableRow from "../UserManagementTableRow/UserManagementTableRow.component";
import UserManagementTableHeader from "../UserManagementTableHeader/UserManagementTableHeader.component";

import "./UserManagementTable.styles.css";
import { userTableColumnHeaders } from "../../utils/table/columnHeaders";
import { IUsersDataList } from "../../redux/users/users.reducer";

const UserManagementTable = ({ usersData }:IUsersDataList) => {
  return (
    <div className="table-container">
      <table id="table">
        <caption>User Management</caption>
        <thead>
          <tr>
            <UserManagementTableHeader columnHeaders={userTableColumnHeaders} />
          </tr>
        </thead>
        <tbody id="tbody">
          {usersData &&
            usersData.map(({ id, name, username, email, phone }) => {
              return (
                <UserManagementTableRow
                  key={id}
                  id={id}
                  name={name}
                  username={username}
                  email={email}
                  phone={phone}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagementTable;