import React from 'react';
import styled from "@emotion/styled";

const CautionContainer = styled.div`
  background-color: #9a0007;
  color: white;
  padding: 1rem;
`

export default function Caution({ children }) {
  return <CautionContainer>
    <strong>Caution!</strong> {children}
  </CautionContainer>
}