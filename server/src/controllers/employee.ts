import { Request, Response } from 'express'

export const getAllEmployees = (req: Request, res: Response) => {
  console.log('Hello getting all employees')
  res.status(200).json({ message: 'Hello' })
}
