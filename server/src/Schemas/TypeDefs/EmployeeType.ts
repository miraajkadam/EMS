import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql'
import { DepartmentType } from '../../..'
import { default as DepartmentTypeGQL } from './DepartmentType'

const EmployeeType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    dept_id: { type: GraphQLID },
    // department: {
    //   type: DepartmentTypeGQL,
    //   resolve: (parent: Pick<DepartmentType, 'dept_id'>, args) => {
    //     const
    //   },
    // },
  }),
})

export default EmployeeType
