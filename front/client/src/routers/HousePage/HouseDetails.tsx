import { useParams } from "react-router-dom";
import { trpc } from "../../trpc";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Dialog } from "@mui/material";

export function HouseDetails() {
  const { id } = useParams();
  const home_details_query = trpc.home.homeDetails.useQuery(id ?? "");
  const person_list_query = trpc.person.personList.useQuery();
  const add_house_query = trpc.home.addPerson.useMutation({
    onSuccess: () => {
      home_details_query.refetch();
    },
  });

  const { register, handleSubmit } = useForm<{ person_id: string }>();
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  if (home_details_query.isLoading || person_list_query.data === undefined)
    return <main>Loading...</main>;
  if (home_details_query.data === null)
    return <main>no home details with this id</main>;
  return (
    <main>
      <h2>House details</h2>
      {home_details_query.data?.city}
      {home_details_query.data?.address}
      {home_details_query.data?.rooms}
      {home_details_query.data?.persons.map((person, index) => (
        <pre key={index}>
          {JSON.stringify(person, null, 4)} personId -- {person.id}
        </pre>
      ))}
      <Dialog open={isOpenDialog} onClose={() => setIsOpenDialog(false)}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            const indexOfPerson = person_list_query.data?.findIndex(
              (person) => person.id === data.person_id
            );

            const person = person_list_query.data[indexOfPerson];

            add_house_query.mutate({
              person_id: data.person_id,
              name: person.name,
              home_id: home_details_query.data?.id ?? "",
            });
          })}
        >
          <select {...register("person_id")}>
            {person_list_query.data?.map((person, index) => (
              <option value={person.id} key={index}>
                {person.name} -- {person.bio}
              </option>
            ))}
          </select>
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => setIsOpenDialog(false)}>Close</button>
      </Dialog>
      <button onClick={() => setIsOpenDialog(true)}>Add person</button>
    </main>
  );
}
