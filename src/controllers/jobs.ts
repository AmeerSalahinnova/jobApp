import { responseHelper } from "../shared/responseHelper";
import * as dataOperation from "../data/operations";
export const getJobs = async (req: any, res: any, next: any) => {
  try {
    const data = await dataOperation.getData();
    responseHelper.ok(req, res, data, "success");
  } catch (err) {
    responseHelper.serverError(req, res, {}, "Server Error");
  }
};


export const getJobByID = async (req: any, res: any, next: any) => {
  try {
    const data = await dataOperation.getData();

    if(!data){
      responseHelper.notFound(req,res,{}, "No jobs Found");
    }
    const job = data.jobs.find((item: any) => item.id === req.param.id);
    if(!job){
      responseHelper.notFound(req,res,{}, "No job with this id is existed");
    }
    responseHelper.ok(req, res, job, "success");
  } catch (err) {
    responseHelper.serverError(req, res, {}, "Server Error");
  }
};


export const createJob = async (req: any, res: any, next: any) => {
  try {
    if(!req.body.id || !req.body.name){
      responseHelper.invalid(req, res, {}, "Please Add Require fields");
    }
    const result: any = await dataOperation.createDate(req.body);
    if (result === "already exist") {
      responseHelper.invalid(req, res, {}, result);
    }else{
      responseHelper.ok(req, res, result, "success");
    }
  } catch (err) {
    responseHelper.serverError(req, res, err, "Server Error");
  }
};
