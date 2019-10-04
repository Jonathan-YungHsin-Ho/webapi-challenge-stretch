import React from 'react';
import styled from 'styled-components';

export default function Action({ action }) {
  return (
    <ActionWrapper>
      <h3>{action.description}</h3>
      <p>Notes: {action.notes}</p>
    </ActionWrapper>
  );
}

const ActionWrapper = styled.div`
  h3 {
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  p {
    font-size: 1.5rem;
    margin: 2rem;
    padding-bottom: 1rem;
  }
`;
