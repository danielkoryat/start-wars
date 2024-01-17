// ErrorMessage.tsx
import React from 'react';
import styled from 'styled-components';

// Styled component for the error message
const ErrorContainer = styled.div`
  padding: 10px 15px;
  margin: 10px 0;
  background-color: #ffdddd;
  border-left: 6px solid #f44336;
  color: #d8000c;
  font-weight: bold;
  border-radius: 5px;
`;

const ErrorText = styled.p`
  margin: 0;
  padding: 0;
`;

// Define the type for the component props
interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <ErrorContainer>
      <ErrorText>{message}</ErrorText>
    </ErrorContainer>
  );
};

export default ErrorMessage;