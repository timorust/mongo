import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc";

export function AuthorPage() {
  const author_query = trpc.author.list.useQuery();
  const delete_author_mutation = trpc.author.delete.useMutation({
    onSuccess: () => {
      author_query.refetch();
    },
  });
  if (author_query.isLoading) return <>Loading...</>;
  return (
    <>
      <main>
        <h1>Author page</h1>
        <div>
          {delete_author_mutation.isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {author_query.data?.map((author, index) => (
                <div key={index}>
                  <strong>id: --- {author.id}</strong>
                  <h2>
                    <NavLink to={`/author/${author.id}`}>{author.name}</NavLink>
                  </h2>
                  <p>{author.bio}</p>
                  <button
                    onClick={() => {
                      console.log("delete clicked", author.id);
                      delete_author_mutation.mutate(author.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
}
