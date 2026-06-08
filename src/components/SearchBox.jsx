import { ImSearch } from "react-icons/im";

import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, serachHandler }) {
  return (
    <div className={styles.search}>
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
