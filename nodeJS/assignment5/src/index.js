import express from "express";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import storyRouter from "./routers/storyRouter";

const PORT = "4005";
const app = express();

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/stories", storyRouter);

const hadleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, hadleListening);
