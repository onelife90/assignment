import express from "express";
import mainRouter from "./routers/mainRouter";

const PORT = 4002;

const app = express();

app.use("/", mainRouter);
app.use("/about", mainRouter);
app.use("/contact", mainRouter);
app.use("/login", mainRouter);

const handleListening = () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
