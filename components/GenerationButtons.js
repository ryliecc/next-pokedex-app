import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.8em;
  margin-top: 1em;
`;

const Button = styled.button`
  border: 0.2em solid black;
  border-radius: 0.4em;
  width: 100%;
  font-size: 1.2em;
  padding: 0.6em;
`;

export default function GenerationButtons() {
  return (
    <Wrapper>
      <Button type="button">I. Generation</Button>
      <Button type="button">II. Generation</Button>
      <Button type="button">III. Generation</Button>
      <Button type="button">IV. Generation</Button>
      <Button type="button">V. Generation</Button>
      <Button type="button">VI. Generation</Button>
      <Button type="button">VII. Generation</Button>
    </Wrapper>
  );
}
