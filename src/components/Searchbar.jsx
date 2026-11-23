
function Searchbar({ search, onSearchChange }) {
  return (
    <><div className="search-bar">
          <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) => onSearchChange(event.target.value)} />
      </div>
       </>
  );
}

export default Searchbar;
