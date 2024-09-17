import "./SearchInput.styles.css";

const SearchInput = ({ ...otherProps }):JSX.Element => {
  return (
    <div className="search-input-container">
      <input {...otherProps} />
    </div>
  );
};

export default SearchInput;