import * as dotenv from "dotenv";
import express, { Request, Response } from "express";
import cors from "cors";
import { ErrorHandler } from "./shared/errorHandling/errorHandler";
import moment from "moment";
import loginRoutes from "./modules/user/login/loginRoutes";
import userRoutes from "./modules/user/userRoutes";
import machineRoutes from "./modules/machines/machineRoutes";

dotenv.config();

const app = express();

app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ extended: true, limit: "15mb" }));
app.use(cors({ origin: "*", credentials: true }));

// healthcheck
app.get("/health", (req: Request, res: Response) => {
  res.status(200).send({
    uptime: process.uptime(),
    message: "Ok",
    date: moment(),
  });
});

app.use("/login", loginRoutes);
app.use("/user", userRoutes);
app.use("/machine", machineRoutes);

app.use(ErrorHandler);
export default app;
