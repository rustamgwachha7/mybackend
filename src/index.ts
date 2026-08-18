import "./config/env";

import express from "express";
import taskroutes from "./routes/task.routes";

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.use("/tasks", taskroutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});