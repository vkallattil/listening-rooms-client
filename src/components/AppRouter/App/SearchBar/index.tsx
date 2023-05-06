import React, { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import * as styled from "./styled";

function SearchBar() {
  const [focus, setFocus] = useState(false);
  const [hover, setHover] = useState(false);

  // Focus / Blur
  const focusHandler = () => {
    setFocus(true);
  };

  const blurHandler = () => {
    setFocus(false);
  };

  // Mouse Enter / Leave
  const mouseEnterHandler = () => {
    setHover(true);
  };

  const mouseLeaveHandler = () => {
    setHover(false);
  };

  return (
    <styled.SearchBarContainer hover={hover}>
      <styled.SearchIconContainer focus={focus}>
        <styled.SearchIcon focus={focus} icon={faMagnifyingGlass} />
      </styled.SearchIconContainer>
      <styled.SearchBar
        focus={focus}
        onFocus={focusHandler}
        onBlur={blurHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        type="search"
        placeholder="Search"
      />
    </styled.SearchBarContainer>
  );
}

export default SearchBar;
