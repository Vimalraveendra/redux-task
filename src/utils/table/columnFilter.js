export const columnFilteredData = (usersData, searchInputText, columnName) => {
  return usersData !== undefined &&
    usersData.length > 0 &&
    columnName.length > 0
    ? usersData.filter((item) => {
        return (
          item[columnName]
            .toString()
            .toLowerCase()
            .indexOf(searchInputText.toLowerCase().trim()) > -1
        );
      })
    : usersData;
};
