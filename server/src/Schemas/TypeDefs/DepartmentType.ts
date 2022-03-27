import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql'

const DepartmentType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'Department',
  fields: () => ({
    name: { type: GraphQLString },
    // dept_id: { type: GraphQLInt },
  }),
})

export default DepartmentType
