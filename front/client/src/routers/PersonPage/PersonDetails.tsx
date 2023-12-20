import { useParams } from "react-router-dom";
import { trpc } from "../../trpc";

export function PersonDetails() {
  const { id } = useParams();
  const person_query = trpc.person.personDetails.useQuery(id ?? "");
  return (
    <main>
      <h1>Person details!</h1>
      <h2>{person_query.data?.name}</h2>
      <h2>{person_query.data?.bio}</h2>
      {person_query.data?.homes.map((home, index) => (
        <div key={index}>
          address = {home.address} -- rooms = {home.rooms}
        </div>
      ))}
    </main>
  );
}
