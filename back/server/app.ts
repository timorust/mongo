import express from "express";
import cors from "cors";
import { generateData } from "./insertData";
import { appRouter } from "./trpc";
import * as trpcExpress from "@trpc/server/adapters/express";
generateData();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
  })
);

app.get("/", (req, res) => {
  res.send({
    message: "start mongo_pro process",
  });
});

app.listen(3300, () => {
  console.log("listening on 3300!");
});
