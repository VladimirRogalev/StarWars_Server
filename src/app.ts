import 'reflect-metadata';
import dotenv from 'dotenv';
import express, {Application, NextFunction, Request, Response} from 'express';
import {useExpressServer} from 'routing-controllers';
import StarWarsFilmsController from './films/controllers/StarWarsFilmsController';
import mongoose from 'mongoose';
import StarWarsPeoplesController from './peoples/controllers/StarWarsPeoplesController';


dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI!)
    .then(() => console.log('Connected to MongoDb'))
    .catch((err) => {
        console.error('MongoDb connection error: ' + err.message);
        process.exit(1);
    });

const app: Application = express();
const PORT = 8080;

app.use(express.json());


useExpressServer(app, {
    controllers: [StarWarsFilmsController, StarWarsPeoplesController],
    defaultErrorHandler: false,
    middlewares: []
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    const status = err.httpCode || err.status || 500;
    res.status(status).json({error: err.message});
});

async function startServer() {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
}

startServer().catch(console.error);
