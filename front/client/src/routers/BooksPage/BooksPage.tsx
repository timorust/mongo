import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc";

export function BooksPage() {
  const book_list_query = trpc.book.bookList.useQuery();
  if (book_list_query.isLoading || book_list_query.data === undefined)
    return <main>Loading...</main>;

  return (
    <main>
      <h1>Books page</h1>
      {book_list_query.data.map((book, index) => (
        <div key={index}>
          <NavLink to={`/books/${book.id}`}>{book.title}</NavLink>
          <p>{book.description}</p>
          <strong>{book.publishedAt}</strong>
        </div>
      ))}

      {book_list_query.data.length === 0 ? <h2>no books</h2> : <></>}
    </main>
  );
}
