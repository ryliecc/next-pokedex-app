import { useRouter } from "next/router";
import usePokedex from "../../swr/usePokedex";
import Navigation from "../../components/Navigation";

export default function PokedexPage() {
  const router = useRouter();
  const { id } = router.query;
  const { pokedex, isLoading, isError } = usePokedex(id);

  const pokedexName = pokedex?.name;
  return (
    <>
      <div>Name: {pokedexName}</div>
      <Navigation />
    </>
  );
}
