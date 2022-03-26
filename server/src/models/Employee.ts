import { model, Schema } from 'mongoose'

const employeeSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
})

const Employee = model('Employee', employeeSchema)

export default Employee
