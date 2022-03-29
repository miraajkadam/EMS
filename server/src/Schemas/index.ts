import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import { EmployeeType } from '../..'
import Department from '../models/Department'
import Employee from '../models/Employee'
import { default as DepartmentTypeGQL } from './TypeDefs/DepartmentType'
import { default as EmployeeTypeGQL } from './TypeDefs/EmployeeType'

const RootQuery: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employees: {
      type: new GraphQLList(EmployeeTypeGQL),
      resolve: () => {
        return Employee.find({})
      },
    },

    departments: {
      type: new GraphQLList(DepartmentTypeGQL),
      resolve: () => {
        return Department.find({})
      },
    },

    employee: {
      type: EmployeeTypeGQL,
      args: { id: { type: GraphQLID } },
      resolve: async (parent, args: Pick<EmployeeType, 'id'>) => {
        const employee = await Employee.findById(args.id)
        return employee
      },
    },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createEmployee: {
      type: EmployeeTypeGQL,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: async (parent: any, args: any) => {
        const newEmployee = new Employee({ name: args.name, email: args.email })
        const response = await newEmployee.save()

        return response
      },
    },

    createDepartment: {
      type: DepartmentTypeGQL,
      args: {
        name: { type: GraphQLString },
      },
      resolve: async (parent: any, args: any) => {
        const newDepartment = new Department({ name: args.name })
        const response = await newDepartment.save()

        return response
      },
    },
  },
})

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation })

export default schema
