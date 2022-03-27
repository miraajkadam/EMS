import { Application } from 'express'
import mongoose from 'mongoose'
import Employee from '../models/Employee'

export default class ServerHelper {
  public connectToDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/EmployeeDB')
      console.log('Connected to Database...!')
    } catch (err: any) {
      console.error(`Couldn't connect to Database...! ${err}`)
    }
  }

  public startServer = (app: Application, PORT: number) => {
    try {
      app.listen(+PORT, () => {
        console.log(`Server running on PORT ${PORT}`)
      })
    } catch (err: any) {
      return console.error(`Error in starting the server, ${err.message}`)
    }
  }

  public testMongoConnection = () => {
    const emp = new Employee({
      name: 'Miraaj Kadam',
      email: 'miraajkadam@gmail.com',
    })

    emp.save().then(() => console.log('One entry added'))
  }
}
