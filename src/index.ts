import express from "express";
import path from "path";
import jobsRouter from "./routes/jobs";
import { responseHelper } from "./shared/responseHelper";
const app = express();
const port = 8080; // default port to listen

app.use('/jobs', jobsRouter);

console.log(__dirname)
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