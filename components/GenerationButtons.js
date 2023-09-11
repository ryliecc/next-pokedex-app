import { styled } from "styled-components";
import { useRouter } from "next/router";

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
  const router = useRouter();

  function handleClickGenIButton() {
    router.push("/generations/generation-i");
  }

  function handleClickGenIiButton() {
    router.push("/generations/generation-ii");
  }

  function handleClickGenIiiButton() {
    router.push("/generations/generation-iii");
  }

  function handleClickGenIvButton() {
    router.push("/generations/generation-iv");
  }

  function handleClickGenVButton() {
    router.push("/generations/generation-v");
  }
  return (
    <Wrapper>
      <Button type="button" onClick={handleClickGenIButton}>
        I. Generation
      </Button>
      <Button type="button" onClick={handleClickGenIiButton}>
        II. Generation
      </Button>
      <Button type="button" onClick={handleClickGenIiiButton}>
        III. Generation
      </Button>
      <Button type="button" onClick={handleClickGenIvButton}>
        IV. Generation
      </Button>
      <Button type="button" onClick={handleClickGenVButton}>
        V. Generation
      </Button>
    </Wrapper>
  );
}
