import { Application } from 'express';
import mongoose from 'mongoose';

export default class ServerHelper {
  public connectToDB = async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/EmployeeDB');
      console.log('Connect to DB');
    } catch (err: any) {
      console.error("Couldn't connect to MongoDB");
    }
  };

  public startServer = (app: Application, PORT: string) => {
    try {
      app.listen(+PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
      });
    } catch (e: any) {
      return console.error(`Error in starting the server, ${e.message}`);
    }
  };
}
