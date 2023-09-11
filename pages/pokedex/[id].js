import { useRouter } from "next/router";
import usePokedex from "../../swr/usePokedex";
import Navigation from "../../components/Navigation";

export default function PokedexPage() {
  const router = useRouter();
  const { id } = router.query;
  const { pokedex, isLoading, isError } = usePokedex(id);

  const pokedexName = pokedex?.name;

  if (isLoading) {
    return (
      <>
        <div>Loading ...</div>
        <Navigation />
      </>
    );
  }
  if (isError) {
    return (
      <>
        <div>Error ...</div>
        <Navigation />
      </>
    );
  }
  return (
    <>
      <div>Name: {pokedexName}</div>
      <ul>
        Pokemon:
        {pokedex?.pokemon_entries.map((pokemon) => {
          return (
            <li key={pokemon.entry_number}>
              {pokemon.entry_number}: {pokemon.pokemon_species.name}
            </li>
          );
        })}
      </ul>
      <Navigation />
    </>
  );
}
