import { GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql'
import Department from '../models/Department'
import Employee from '../models/Employee'
import DepartmentType from './TypeDefs/DepartmentType'
import EmployeeType from './TypeDefs/EmployeeType'

const RootQuery: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getAllEmployees: {
      type: new GraphQLList(EmployeeType),
      resolve(parent, args) {
        return Employee.find({})
      },
    },

    // getAllDepartments: {
    //   type: new GraphQLList(DepartmentType),
    //   resolve(parent, args) {
    //     return Department.find({})
    //   },
    // },
  },
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createEmployee: {
      type: EmployeeType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve: async (parent: any, args: any) => {
        // FakeEmployeeData.push({
        //   id: FakeEmployeeData.length + 1,
        //   name: args.name,
        //   email: args.email,
        // })
        const newEmployee = new Employee({ name: args.name, email: args.email })
        const response = await newEmployee.save()

        return response
      },
    },

    createDepartment: {
      type: DepartmentType,
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
