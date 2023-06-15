import React from 'react'
import FilterComp from '../Components/FilterComp'
import BookList from '../Components/BookList'
import styled from "styled-components"

const Books = () => {
  return (
    <div>
      <BookPageWrapper>
        <FilterWrapper>
          <FilterComp />
        </FilterWrapper>
        <BookWrapper style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,max-content))",margin:"auto"}}>
          <BookList />
        </BookWrapper>
      </BookPageWrapper>

    </div>
  )
}

const BookPageWrapper = styled.div`
display:flex;
border:2px solid red;
`;
const FilterWrapper = styled.div`
width:300px;
border:1px solid blue;
`;
const BookWrapper = styled.div`
width:100%;
border:2px solid green;
`;

export default Books