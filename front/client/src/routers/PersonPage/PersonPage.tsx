import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc";

export function PersonPage() {
  const person_list_query = trpc.person.personList.useQuery();
  if (person_list_query.isLoading) return <div>Loading...</div>;
  return (
    <main>
      <h1>Person page!</h1>
      {person_list_query.data?.map((person, index) => (
        <NavLink to={`/persons/${person.id}`} key={index}>
          <h3>{person.name}</h3>
          <p>{person.bio}</p>
        </NavLink>
      ))}
    </main>
  );
}
