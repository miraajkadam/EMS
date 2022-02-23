import { Application } from 'express';

const startServer = (app: Application, PORT: any) => {
  try {
    app.listen(+PORT, () => {
      console.log(`Server running on PORT ${PORT}`);
    });
  } catch (e: any) {
    return console.error(`Error in starting the server, ${e.message}`);
  }
};

export default startServer;
