import { useRouter } from "next/router";
import Navigation from "../../components/Navigation";
import useGeneration from "../../swr/useGeneration";

export default function GenerationPage() {
  const router = useRouter();
  const { name } = router.query;
  const { generation, isLoading, isError } = useGeneration(name);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }
  return (
    <>
      <div>{name}</div>
      <Navigation />
    </>
  );
}
