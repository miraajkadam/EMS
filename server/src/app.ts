import 'dotenv/config'
import express, { Application } from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './Schemas/index'
import ServerHelper from './utils/ServerHelper'

const app: Application = express()
const sh = new ServerHelper()

sh.startServer(app, +process.env.PORT!)
sh.connectToDB()

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

// app.use('/api/employees', employeesRoutes);
