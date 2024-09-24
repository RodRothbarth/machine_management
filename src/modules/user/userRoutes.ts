import { Router } from "express";
import { catchAsync } from "../../shared/errorHandling/catchAsync";
import userController from "./userController";

const router = Router();

router.route("/").post(catchAsync(userController.createUser));

export default router;
