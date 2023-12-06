import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc";

export function AuthorPage() {
  const authorQuery = trpc.author.list.useQuery();

  if (authorQuery.isLoading) return <>Loading...</>;
  return (
    <>
      <main>
        <h1>Author page</h1>
        <div>
          {authorQuery.data?.map((author, index) => (
            <div key={index}>
              <strong>id: --- {author.id}</strong>
              <h2>
                <NavLink to={`/author/${author.id}`}>{author.name}</NavLink>
              </h2>
              <p>{author.bio}</p>
              <hr />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
