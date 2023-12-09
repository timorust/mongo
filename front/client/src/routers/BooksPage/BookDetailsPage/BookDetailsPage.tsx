import { useParams } from "react-router-dom";
import { trpc } from "../../../trpc";

export function BookDetailsPage() {
  const params = useParams();
  const id = params.id ?? "";

  const book_details_query = trpc.book.bookDetails.useQuery(id);

  if (book_details_query.isLoading) return <div>Loading...</div>;
  if (book_details_query === null || book_details_query.data === undefined)
    return <main>no book details</main>;
  return (
    <main>
      <h1>Book details page -- {id}</h1>
      <h2>{book_details_query.data?.title}--------------title</h2>
      <p>{book_details_query.data?.description}----------------desc</p>
      <p>
        {book_details_query.data?.publishedAt}-----------------------------time
      </p>
    </main>
  );
}
