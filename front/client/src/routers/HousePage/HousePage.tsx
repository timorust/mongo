import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IAddHouse {
  address: string;
  city: string;
  rooms: number;
  persons: string[];
}

export function HousePage() {
  const home_quey = trpc.home.homeList.useQuery();
  const [openHouse, setOpenHouse] = useState(false);
  const persons_name_query = trpc.person.personListNames.useQuery();
  const create_house_mutation = trpc.home.createHouse.useMutation({
    onSuccess: () => {
      home_quey.refetch;
      setOpenHouse(false);
    },
  });
  const { register, handleSubmit } = useForm<IAddHouse>();

  if (home_quey.data == undefined || home_quey.isLoading)
    return <main>Loading...</main>;

  return (
    <main>
      <h2>House page Work!</h2>
      <button onClick={() => setOpenHouse(true)}>open dialog</button>
      {home_quey.data.map((home, index) => (
        <div key={index}>
          <NavLink to={`/house/${home.id}`}>
            <p>{home.city}</p>
            <p>{home.address}</p>
            <p>{home.rooms}</p>
          </NavLink>
        </div>
      ))}

      <Dialog open={openHouse} onClose={() => setOpenHouse(false)}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            if (persons_name_query.data === undefined) return;
            const persons: { id: string; name: string }[] = data.persons.map(
              (person_id) => {
                const index_of_person = persons_name_query.data?.findIndex(
                  (person) => person.id === person_id
                );
                const person = persons_name_query.data[index_of_person];
                return {
                  id: person_id,
                  name: person.name,
                };
              }
            );
            create_house_mutation.mutate({
              address: data.address,
              rooms: parseInt(data.rooms.toString()),
              city: data.city,
              persons: persons ?? [],
            });
          })}
        >
          address -
          <input
            type="text"
            {...register("address")}
            placeholder="address..."
          />
          city -
          <input type="text" {...register("city")} placeholder="city..." />
          rooms -
          <input type="number" {...register("rooms")} placeholder="rooms..." />
          <select {...register("persons")} multiple>
            {persons_name_query.data?.map((person) => (
              <option key={person.id} value={person.id}>
                {person.name}
              </option>
            ))}
          </select>
          <button type="submit">submit</button>
        </form>
      </Dialog>
    </main>
  );
}
