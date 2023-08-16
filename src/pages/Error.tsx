import styled from "styled-components";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.error};
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
`;

function Error() {
  return (
    <ErrorContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Oops! The page you are looking for does not exist.</ErrorMessage>
    </ErrorContainer>
  );
}

export default Error;
