import express, { Router } from 'express'
import { getAllEmployees as fetchAllEmployees } from '../controllers/employee'

export const router: Router = express.Router()

router.get('/', fetchAllEmployees)
