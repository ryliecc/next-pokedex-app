import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useGeneration(name) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/generation/${name}/`,
    fetcher
  );

  return {
    generation: data,
    isLoading,
    isError: error,
  };
}
