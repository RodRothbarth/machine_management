import { Router } from "express";
import { catchAsync } from "../../shared/errorHandling/catchAsync";
import machineController from "./sensorController";

const router = Router();

router
  .route("/")
  .post(catchAsync(machineController.createMachine))
  .get(catchAsync(machineController.getAllMachines));

router
  .route("/:id")
  .patch(catchAsync(machineController.editMachine))
  .delete(catchAsync(machineController.deleteMachine))
  .get(catchAsync(machineController.getMachine));

export default router;
