import { useParams } from "react-router-dom";
import { trpc } from "../../../trpc";
import { Dialog } from "@mui/material";
// import { useSignal } from "@preact/signals-react/runtime";
import { useState } from "react";

export function BookDetailsPage() {
  const params = useParams();
  const id = params.id ?? "";

  const book_details_query = trpc.book.bookDetails.useQuery(id);
  const [openDialog, setOpenDialog] = useState(false);

  if (book_details_query.isLoading) return <div>Loading...</div>;
  if (book_details_query === null || book_details_query.data === undefined)
    return <main>no book details</main>;
  return (
    <main>
      <h1>{book_details_query.data?.title}</h1>
      <p>{book_details_query.data?.description}</p>
      <h5>{book_details_query.data?.publishedAt}</h5>

      <Dialog open={openDialog}>
        <button onClick={() => setOpenDialog(false)}>close</button>
        <h2>Dialog component</h2>
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
