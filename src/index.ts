import express from "express";
import path from "path";
import jobsRouter from "./routes/jobs";
import { responseHelper } from "./shared/responseHelper";
import cors from "cors"

const app = express();
const port = 8080; // default port to listen

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/jobs', jobsRouter);

// Configure Express to use EJS
app.set( "views", path.join( __dirname, "/views" ) );
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get( "/", ( req: any, res: any ) => {
    // render the index template
    res.send("Ameer Salah Jobs API")
} );

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );