import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styled";

function SearchBar() {
  const [focus, setFocus] = useState(false);

  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  return (
    <styled.SearchBarContainer>
      <styled.SearchIconContainer focus={focus}>
        <styled.SearchIcon focus={focus} icon={faMagnifyingGlass} />
      </styled.SearchIconContainer>
      <styled.SearchBar
        focus={focus}
        onFocus={focusHandler}
        onBlur={blurHandler}
        type="search"
        placeholder="Search"
      />
    </styled.SearchBarContainer>
  );
}

export default SearchBar;
