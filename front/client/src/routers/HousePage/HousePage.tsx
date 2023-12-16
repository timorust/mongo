import { trpc } from "../../trpc";

export function HousePage() {
  const home_quey = trpc.home.homeList.useQuery();

  if (home_quey.data == undefined || home_quey.isLoading)
    return <main>Loading...</main>;

  return (
    <main>
      <h2>House page Work!</h2>
      {home_quey.data.map((home, index) => (
        <div key={index}>
          <h2>{home.city}</h2>
          <p>{home.address}</p>
          <p>{home.rooms}</p>
        </div>
      ))}
    </main>
  );
}
