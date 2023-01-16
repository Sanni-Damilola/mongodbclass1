import express, { Application, Response, Request } from "express";
import route from "./Routes/route";
require("./Config/db");

const app: Application = express();
const port: number = 2001;
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Started!",
  });
});

app.use("/api", route);

app.listen(port, () => {
  console.log("listening");
});
