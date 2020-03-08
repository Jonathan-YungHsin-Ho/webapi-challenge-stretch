import styled from 'styled-components';

export const Button = styled.div`
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const AddWrapper = styled.div`
  border: 1px solid black;
  padding: 2rem 5%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
`;
