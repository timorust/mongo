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
              {JSON.stringify(author, null, 4)}
              <hr />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
