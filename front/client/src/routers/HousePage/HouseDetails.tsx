import { useParams } from "react-router-dom";
import { trpc } from "../../trpc";

export function HouseDetails() {
  const { id } = useParams();
  const home_details_query = trpc.home.homeDetails.useQuery(id ?? "");

  if (home_details_query.isLoading) return <main>Loading...</main>;
  if (home_details_query.data === null)
    return <main>no home details with this id</main>;
  return (
    <main>
      <h2>House details</h2>
      <h1>city--{home_details_query.data?.city}</h1>
      <p>address--{home_details_query.data?.address}</p>
      <p>personId--{home_details_query.data?.personId}</p>
      <h3>rooms--{home_details_query.data?.rooms}</h3>
    </main>
  );
}
