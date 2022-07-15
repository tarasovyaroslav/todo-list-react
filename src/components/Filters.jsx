import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Radio from './Radio';

const FiltersStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  margin-bottom: 8px;
  @media (max-width: 972px) {
    font-size: 1.1rem;
  }
`;

const Filters = ({ filter, changeFilter }) => {
  return (
    <FiltersStyled>
      <Radio
        value="all"
        name="filter"
        checked={filter === 'all'}
        onChange={() => changeFilter('all')}
      >
        All
      </Radio>
      <Radio
        value="completed"
        name="filter"
        checked={filter === 'completed'}
        onChange={() => changeFilter('completed')}
      >
        Completed
      </Radio>
      <Radio
        value="uncompleted"
        name="filter"
        checked={filter === 'uncompleted'}
        onChange={() => changeFilter('uncompleted')}
      >
        Uncompleted
      </Radio>
    </FiltersStyled>
  );
};

export default Filters;
