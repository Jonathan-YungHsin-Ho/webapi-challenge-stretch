import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Action({ action }) {
  console.log(action);

  const handleDelete = () => {};

  return (
    <ActionWrapper>
      <h3>Action: {action.description}</h3>
      <p>{action.notes}</p>
      <ButtonsWrapper>
        <Button>Edit</Button>
        <Button onClick={() => handleDelete(action.id)}>Delete</Button>
      </ButtonsWrapper>
    </ActionWrapper>
  );
}

const ActionWrapper = styled.div`
  width: 100%
  border: 1px solid black;  
  padding: 1rem 0;

  h3 {
    font-size: 1.8rem;
    margin: 1rem 0;
  }

  p {
    margin: 2rem 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.div`
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
