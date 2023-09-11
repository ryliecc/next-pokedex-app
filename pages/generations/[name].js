import { useRouter } from "next/router";
import Navigation from "../components/Navigation";

export default function GenerationPage() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <Navigation />
    </>
  );
}
