import express from "express";
import cors from "cors";
import path from "path";
import { appRouter } from "./trpc";
import * as trpcExpress from "@trpc/server/adapters/express";
// import { generateDataPersonAndHomes } from "./scripts/generateDataPersonAndHomes";
// generateDataPersonAndHomes(10);
// import { generateData } from "./insertData";
// generateData();

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

// app.get("/", (req, res) => {
//   res.send({
//     message: "start mongo_pro process",
//   });
// });

console.log(__dirname);
app.use(express.static(path.join(__dirname, "../static-client")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../static-client/index.html"));
});

app.listen(3300, () => {
  console.log("listening on 3300!");
});
