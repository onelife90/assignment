import express from "express";
import path from "path";
import bodyParser from "body-parser";
import rootRouter from "./rootRouter";

const PORT = 4015;
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", rootRouter);

// Codesanbox does not need PORT :)
app.listen(PORT, () => console.log(`Listening! http://localhost:${PORT}`));
