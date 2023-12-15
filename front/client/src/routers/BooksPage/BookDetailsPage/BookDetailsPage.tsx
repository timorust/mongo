import { useParams } from "react-router-dom";
import { trpc } from "../../../trpc";
import { Dialog } from "@mui/material";
// import { useSignal } from "@preact/signals-react/runtime";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IBookDetails {
  id: string;
  title: string;
  description: string;
  authorId: string;
}

export function BookDetailsPage() {
  const params = useParams();
  const id = params.id ?? "";

  const author_details_query = trpc.author.list.useQuery();
  const book_details_query = trpc.book.bookDetails.useQuery(id);
  const edit_book_mutation = trpc.book.bookEdit.useMutation({
    onSuccess: () => {
      book_details_query.refetch();
    },
  });

  const [openDialog, setOpenDialog] = useState(false);
  const { register, handleSubmit } = useForm<IBookDetails>({
    defaultValues: {
      ...book_details_query.data,
      description: book_details_query.data?.description ?? "",
    },
  });

  if (book_details_query.isLoading) return <div>Loading...</div>;
  if (book_details_query === null || book_details_query.data === undefined)
    return <main>no book details with this id</main>;
  return (
    <main>
      <h1>{book_details_query.data?.title}</h1>
      <p>{book_details_query.data?.description}</p>
      <h5>{book_details_query.data?.publishedAt}</h5>

      <Dialog open={openDialog}>
        <button onClick={() => setOpenDialog(false)}>close</button>
        <h2>Dialog component</h2>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            edit_book_mutation.mutate({
              ...data,
              id: book_details_query?.data?.id ?? "",
            });
          })}
        >
          <input type="text" {...register("title")} placeholder="title..." />
          <input
            type="text"
            {...register("description")}
            placeholder="desc..."
          />
          <select {...register("authorId")}>
            {author_details_query?.data?.map((author, index) => (
              <option key={index} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
          <button type="submit">update data</button>
        </form>
      </Dialog>
      <button
        onClick={() => {
          setOpenDialog(true);
        }}
      >
        edit
      </button>
    </main>
  );
}
