import 'dotenv/config';
import express, { Application } from 'express';
import { router as employeesRoutes } from './routes/employee';
import startServer from './utils/startServer';

const app: Application = express();

app.use('/api/employees', employeesRoutes);

startServer(app, process.env.PORT);
