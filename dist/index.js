"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const jobs_1 = __importDefault(require("./routes/jobs"));
const app = (0, express_1.default)();
const port = 8080; // default port to listen
app.use('/jobs', jobs_1.default);
console.log(__dirname);
// Configure Express to use EJS
app.set("views", path_1.default.join(__dirname, "/views"));
app.set('view engine', 'ejs');
// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.send("Ameer Salah Jobs API");
});
// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map