import React from 'react';
import styled from 'styled-components';
import { Button, AddWrapper, Form } from '../styled-components';

export default function AddProject() {
  return (
    <AddWrapper>
      <p>Add Project:</p>
      <Form>
        <input type='text' placeholder='...project name' />
        <input type='text' placeholder='...description' />
      </Form>
      <Button>Submit</Button>
    </AddWrapper>
  );
}
