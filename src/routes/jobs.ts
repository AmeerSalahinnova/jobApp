

import express from "express";
const jobsRouter = express.Router();
import * as jobsController from "../controllers/jobs";
/* GET users listing. */
jobsRouter.get("/", jobsController.getJobs);
jobsRouter.post("/", jobsController.createJob);

export default jobsRouter
