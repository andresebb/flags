import React from "react";
import styled from "styled-components";
import Search from "./SearchByCountry";
import FilterByRegion from "./FilterByRegion";

const ActionListStyled = styled.div`
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }
  @media screen and (min-width: 768px) {
    .grid {
      grid-template-columns: 480px 1fr 164px;
    }
  }
`;

function ActionList() {
  return (
    <ActionListStyled>
      <div className="grid">
        <Search />
        <span></span>
        <FilterByRegion />
      </div>
    </ActionListStyled>
  );
}

export default ActionList;
