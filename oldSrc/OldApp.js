import React from 'react';
import Title from './OldcomponentsWithClass/Title';
import Wrapper from './OldcomponentsWithClass/Wrapper';
import CardContainer from './OldcomponentsWithClass/EmployeeCard/CardContainer';
import SearchBoxContent from './OldcomponentsWithClass/EmployeeSearchBox/SearchBox';

function App() {
  return (
    <>
      <Title>Employee Directory</Title>
      <SearchBoxContent />
      <Wrapper>
        <CardContainer />
      </Wrapper>
    </>
  );
}

export default App;
