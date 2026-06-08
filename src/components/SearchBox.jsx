import { ImSearch } from "react-icons/im";

function SearchBox({ search, setSearch,serachHandler }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={serachHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
