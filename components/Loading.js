import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 14em;
`;

const LoadingAnimation = styled.div`
  width: 3rem;
  height: 3rem;
  border: 9px solid #ffd3b6;
  border-top: 10px solid #ff8b94;
  border-radius: 100%;
  margin: auto;
  animation: ${spin} 1s infinite linear;
`;

const LoadingText = styled.p`
  font-size: 1.4em;
  text-align: center;
`;

export default function LoadingComponent() {
  return (
    <LoadingContainer>
      <LoadingAnimation />
      <LoadingText>Loading ...</LoadingText>
    </LoadingContainer>
  );
}
