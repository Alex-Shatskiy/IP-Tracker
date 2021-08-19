const SearchBar = (props) => {
  const { handleChange, searchForIp, searchIp } = props;
  return (
    <>
      <div className="searchBar">
        <input
          placeholder="Search for any IP or domain address"
          className="searchIpBar"
          onChange={handleChange}
        ></input>
        <button className="searchButton" onClick={() => searchForIp(searchIp)}>
          {">"}
        </button>
      </div>
    </>
  );
};

export default SearchBar;
