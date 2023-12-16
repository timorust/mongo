import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc";
import { useForm } from "react-hook-form";

interface IBooks {
  title: string;
  description: string;
  authorId: string;
  publishedAt: string;
}
export function BooksPage() {
  const author_details_query = trpc.author.list.useQuery();
  const book_list_query = trpc.book.bookList.useQuery();
  const add_mutation_book = trpc.book.createBook.useMutation({
    onSuccess: () => {
      book_list_query.refetch();
    },
  });

  const { register, handleSubmit } = useForm<IBooks>();

  if (book_list_query.isLoading || book_list_query.data === undefined)
    return <main>Loading...</main>;

  return (
    <main>
      <h1>Books page</h1>
      <form onSubmit={handleSubmit((data) => add_mutation_book.mutate(data))}>
        <input
          type="text"
          {...register("title")}
          placeholder="enter title please..."
        />
        <input
          type="text"
          {...register("description")}
          placeholder="enter description please..."
        />
        {/* <input
          type="text"
          {...register("authorId")}
          placeholder="enter authorId please..."
        /> */}
        <select {...register("authorId")}>
          {author_details_query.data?.map((author, index) => (
            <option key={index} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <button type="submit">add book</button>
      </form>
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
