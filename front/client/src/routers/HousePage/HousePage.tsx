import { NavLink } from "react-router-dom";
import { trpc } from "../../trpc";
import { Dialog } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface IAddHouse {
  address: string;
  city: string;
  rooms: string;
}

export function HousePage() {
  const home_quey = trpc.home.homeList.useQuery();
  const [openHouse, setOpenHouse] = useState(false);
  const create_house_mutation = trpc.home.createHouse.useMutation();
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
          <button type="submit">submit</button>
        </form>
      </Dialog>
    </main>
  );
}
