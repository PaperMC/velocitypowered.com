import React from 'react';
import styled from "@emotion/styled";

const NoteContainer = styled.div`
  background-color: #e86b25;
  color: white;
  padding: 1rem;
  
  a {
    color: #26aef9;
  }
`

export default function Note({ children }) {
  return <NoteContainer>
    <strong>Caution!</strong> {children}
  </NoteContainer>
}