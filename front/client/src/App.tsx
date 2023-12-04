import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "./trpc";
// import { Example } from "./components/exa";
import { BrowserRouter } from "react-router-dom";
import { RouterComponent } from "./routers";
import { HomePage } from "./routers/HomePage/homePage";

export function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3300/trpc",
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <RouterComponent />
        </BrowserRouter>
        {/* <Example /> */}
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App;
