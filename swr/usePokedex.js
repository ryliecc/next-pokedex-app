import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function usePokedex(name) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/pokedex/${name}/`,
    fetcher
  );

  return {
    pokedex: data,
    isLoading,
    isError: error,
  };
}
