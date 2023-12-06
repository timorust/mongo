import { useParams } from "react-router-dom";
import { trpc } from "../../../trpc";

export function AuthorDetailsPage() {
  const params = useParams();
  const { id } = params;
  const author_details_query = trpc.author.details.useQuery(id ?? "");

  if (id === undefined)
    return (
      <main>
        <p>Error no id was provider!</p>
      </main>
    );
  if (author_details_query.isLoading) return <main>Loading..</main>;
  if (
    author_details_query.data === undefined ||
    author_details_query.data.authorDetails === null
  )
    return <main>no author details</main>;
  return (
    <main>
      <h1>AuthorDetailsPage</h1>
      <div>
        name: <h2>{author_details_query.data.authorDetails.name}</h2>
        bio: <p>{author_details_query.data.authorDetails.bio}</p>
        id: <span>{author_details_query.data.authorDetails.id}</span>
      </div>
      <hr />
      <div>
        books:{" "}
        <div>
          {author_details_query.data.books.map((book, index) => (
            <div key={index}>
              <h2>Title--- {book.title}</h2>
              <p>Context--- {book.description}</p>
              <span>Author-- {book.authorId}</span>
              <p>time: {book.publishedAt}</p>
            </div>
          ))}
        </div>
      </div>
      {/* <pre>{JSON.stringify(author_details_query.data, null, 4)}</pre> */}
    </main>
  );
}
