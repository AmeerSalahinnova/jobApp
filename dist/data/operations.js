"use strict";
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
exports.createDate = exports.getData = void 0;
const promises_1 = require("fs/promises");
const uuid_1 = require("uuid");
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield (0, promises_1.readFile)("./jobs.json", "utf8");
        console.log(res);
        const jsonData = JSON.parse(res); // now it an object
        return jsonData;
    }
    catch (err) {
        throw new Error("error while reading data");
    }
});
exports.getData = getData;
const createDate = (incomingData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, exports.getData)();
        const jobs = data.jobs;
        const founded = jobs.find((item) => item.id === incomingData.id);
        if (!founded) {
            jobs.push(Object.assign({ uuid: (0, uuid_1.v4)() }, incomingData));
            data.jobs = jobs;
            const res = yield (0, promises_1.writeFile)("jobs.json", JSON.stringify(data));
            return res;
        }
        else {
            return "not Founded";
        }
    }
    catch (err) {
        console.error(err);
        throw new Error("error while writing data");
    }
});
exports.createDate = createDate;
//# sourceMappingURL=operations.js.map