import { Schema as MongooseSchema } from 'mongoose';

const Schema = MongooseSchema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export default employeeSchema;
