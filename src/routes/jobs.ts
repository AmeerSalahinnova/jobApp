

import express from "express";
const jobsRouter = express.Router();
import * as jobsController from "../controllers/jobs";
/* GET users listing. */
jobsRouter.get("/", jobsController.getJobs);
jobsRouter.get("/:id", jobsController.getJobByID);
jobsRouter.post("/", jobsController.createJob);

export default jobsRouter
