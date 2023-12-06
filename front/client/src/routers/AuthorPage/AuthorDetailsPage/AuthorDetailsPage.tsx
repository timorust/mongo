import { useParams } from "react-router-dom";
import { trpc } from "../../../trpc";

export function AuthorDetailsPage() {
  const params = useParams();
  const { id } = params;
  const author_details = trpc.author.details.useQuery(id ?? "");

  if (id === undefined)
    return (
      <main>
        <p>Error no id was provider!</p>
      </main>
    );
  // if (author_details === undefined)
  //   return (
  //     <main>
  //       <p>Error no id was provider!</p>
  //     </main>
  //   );
  return (
    <main>
      <h1>AuthorDetailsPage</h1>
      <p>id is : {JSON.stringify(params, null, 4)}</p>
      <hr />
      <pre>
        author_details is : {JSON.stringify(author_details.data, null, 4)}
      </pre>
    </main>
  );
}
