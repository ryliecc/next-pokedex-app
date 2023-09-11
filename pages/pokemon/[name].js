import { styled } from "styled-components";
import { useRouter } from "next/router";
import usePokemon from "../../swr/usePokemon";
import Navigation from "../../components/Navigation";
import Ability from "../../components/PokeAbility";

const Header = styled.header`
  background-color: #dcedc1;
  padding: 0.8em;
`;

const Title = styled.h1`
  background-color: #ffd3b6;
  text-align: center;
  padding: 0.2em;
  color: #ff8b94;
`;
const Main = styled.main`
  background-color: #a8e6cf;
  padding: 0.6em;
  position: relative;
  top: 0em;
  padding-bottom: 4.2em;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
`;

const Image = styled.img`
  width: 100%;
  border: 0.2em solid black;
  border-radius: 0.4em;
  background-color: #dcedc1;
`;

const Traits = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  justify-content: space-evenly;
`;

const Trait = styled.div`
  font-size: 1.2em;
  border: 0.2em solid black;
  border-radius: 0.4em;
  padding: 0.2em;
  width: 45%;
  text-align: center;
  background-color: #dcedc1;
`;

const TraitCategory = styled.p`
  font-size: 0.8em;
`;

const AbilityList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  border: 0.2em solid black;
  border-radius: 0.4em;
  background-color: #dcedc1;
  padding: 0.4em;
`;

const SubTitle = styled.h2``;

export default function PokemonPage() {
  const router = useRouter();
  const { name } = router.query;
  const { pokemonData, isLoading, isError } = usePokemon(name);

  const pokemonName =
    pokemonData?.name.charAt(0).toUpperCase() + pokemonData?.name.slice(1);
  const spriteSrc = pokemonData?.sprites.front_default;
  const baseXp = pokemonData?.base_experience;
  const pokemonHeight = pokemonData?.height;
  const pokemonWeight = pokemonData?.weight;
  const abilitiesArr = pokemonData?.abilities;
  const typesArr = pokemonData?.types;
  const typesStr = typesArr?.map((type) => {
    return type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1);
  });

  return (
    <>
      <Header>
        <Title>{pokemonName}</Title>
      </Header>
      <Main>
        <Image src={spriteSrc} alt={"Picture of " + pokemonName} />
        <Traits>
          <Trait>
            <TraitCategory>Base XP:</TraitCategory>
            {baseXp}
          </Trait>
          <Trait>
            <TraitCategory>Height:</TraitCategory> {pokemonHeight}
          </Trait>
          <Trait>
            <TraitCategory>Weight:</TraitCategory> {pokemonWeight}
          </Trait>
          <Trait>
            <TraitCategory>Types:</TraitCategory> {typesStr}
          </Trait>
        </Traits>
        <AbilityList>
          <SubTitle>Abilities:</SubTitle>
          {abilitiesArr?.map((ability) => {
            const abilityName = ability.ability.name;
            return (
              <>
                <Ability abilityName={abilityName} />
              </>
            );
          })}
        </AbilityList>
      </Main>
      <Navigation />
    </>
  );
}
