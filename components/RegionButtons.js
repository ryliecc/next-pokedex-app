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
  background-color: #dcedc1;
`;

export default function RegionButtons() {
  const router = useRouter();

  function handleClickNationalButton() {
    router.push("/pokedex/1");
  }

  function handleClickKantoButton() {
    router.push("/pokedex/2");
  }

  function handleClickJohtoButton() {
    router.push("/pokedex/3");
  }

  function handleClickHoennButton() {
    router.push("/pokedex/4");
  }

  function handleClickSinnohButton() {
    router.push("/pokedex/5");
  }

  function handleClickUnovaButton() {
    router.push("/pokedex/8");
  }

  function handleClickAlolaButton() {
    router.push("/pokedex/16");
  }

  return (
    <Wrapper>
      <Button type="button" onClick={handleClickKantoButton}>
        Kanto
      </Button>
      <Button type="button" onClick={handleClickJohtoButton}>
        Johto
      </Button>
      <Button type="button" onClick={handleClickHoennButton}>
        Hoenn
      </Button>
      <Button type="button" onClick={handleClickSinnohButton}>
        Sinnoh
      </Button>
      <Button type="button" onClick={handleClickUnovaButton}>
        Unova
      </Button>
      <Button type="button" onClick={handleClickAlolaButton}>
        Alola
      </Button>
      <Button type="button" onClick={handleClickNationalButton}>
        National
      </Button>
    </Wrapper>
  );
}
