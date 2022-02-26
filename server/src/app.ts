import 'dotenv/config';
import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from './Schemas/index';
import startServer from './utils/startServer';

const app: Application = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.use('/api/employees', employeesRoutes);

startServer(app, process.env.PORT);
