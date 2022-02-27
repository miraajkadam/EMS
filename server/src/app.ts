import 'dotenv/config';
import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import Employee from './models/Employee';
import schema from './Schemas/index';
import ServerHelper from './utils/ServerHelper';

const app: Application = express();
const sh = new ServerHelper();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.use('/api/employees', employeesRoutes);

sh.startServer(app, process.env.PORT!);
sh.connectToDB();

const emp = new Employee({
  name: 'Madison Hyde',
  email: 'miraaj',
});

emp.save().then(() => console.log('One entry added'));
