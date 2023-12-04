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
              {/* <p>{author.id}</p>
              <hr />
              <p>{author.bio}</p>
              <hr />
              <p>{author.name}</p>
              <hr /> */}
              {JSON.stringify(author, null, 4)}
              <hr />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
