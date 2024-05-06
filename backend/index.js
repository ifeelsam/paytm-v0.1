import express from "express";
import cors from "cors"
import mainRouter from "./routes/index.js";


const app = express();

app.use(cors());


app.use(express.json());


app.use("/api/v1", mainRouter);

app.listen(3000, (err) => {
  if (err) console.log(err);
  console.log('app is listening on http://localhost:3000/')
});
