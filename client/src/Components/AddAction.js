import React from 'react';
import styled from 'styled-components';
import { Button, AddWrapper, Form } from '../styled-components';

export default function AddAction() {
  return (
    <AddWrapper>
      <p>Add Action:</p>
      <Form>
        <input type='text' placeholder='...action description' />
        <input type='text' placeholder='...notes' />
      </Form>
      <Button>Submit</Button>
    </AddWrapper>
  );
}
