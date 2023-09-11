import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useAbility(id) {
  const { data, error, isLoading } = useSWR(
    `https://pokeapi.co/api/v2/ability/${id}/`,
    fetcher
  );

  return {
    abilityData: data,
    isLoading,
    isError: error,
  };
}
