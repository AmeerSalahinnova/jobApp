"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJob = exports.getJobByID = exports.getJobs = void 0;
const responseHelper_1 = require("../shared/responseHelper");
const dataOperation = __importStar(require("../data/operations"));
const getJobs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dataOperation.getData();
        responseHelper_1.responseHelper.ok(req, res, data, "success");
    }
    catch (err) {
        responseHelper_1.responseHelper.serverError(req, res, {}, "Server Error");
    }
});
exports.getJobs = getJobs;
const getJobByID = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield dataOperation.getData();
        if (!data) {
            responseHelper_1.responseHelper.notFound(req, res, {}, "No jobs Found");
        }
        const job = data.jobs.find((item) => item.id === req.param.id);
        if (!job) {
            responseHelper_1.responseHelper.notFound(req, res, {}, "No job with this id is existed");
        }
        responseHelper_1.responseHelper.ok(req, res, job, "success");
    }
    catch (err) {
        responseHelper_1.responseHelper.serverError(req, res, {}, "Server Error");
    }
});
exports.getJobByID = getJobByID;
const createJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield dataOperation.createDate({
            id: 1,
            name: "ameer",
        });
        if (result === "already exist") {
            responseHelper_1.responseHelper.invalid(req, res, {}, result);
        }
        else {
            responseHelper_1.responseHelper.ok(req, res, result, "success");
        }
    }
    catch (err) {
        responseHelper_1.responseHelper.serverError(req, res, err, "Server Error");
    }
});
exports.createJob = createJob;
//# sourceMappingURL=jobs.js.map