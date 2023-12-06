import { useParams } from "react-router-dom";

export function BookDetailsPage() {
  const params = useParams();
  const id = params.id ?? "";
  return (
    <main>
      <h1>Book details page -- {id}</h1>
      <p>{JSON.stringify(params, null, 4)}</p>
    </main>
  );
}
