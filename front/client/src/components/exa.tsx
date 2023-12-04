import { trpc } from "../trpc";

export function Example() {
  // const post_query = trpc.posts.useQuery();
  const authors_query = trpc.author.list.useQuery();

  // if (post_query.isLoading) return <div>Posts loading...</div>;
  if (authors_query.isLoading) return <div>Authors loading...</div>;

  return (
    <div>
      {/* <pre>{JSON.stringify(post_query.data, null, 2)}</pre> */}
      <pre>{JSON.stringify(authors_query.data, null, 2)}</pre>
    </div>
  );
}
