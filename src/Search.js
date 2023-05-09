import React, { useEffect, useState } from "react";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        placeholder="Search User..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
