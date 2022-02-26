import { GraphQLInt, GraphQLObjectType, GraphQLString } from 'graphql';

const EmployeeType: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    // dept_id: { type: GraphQLInt },
  }),
});

export default EmployeeType;
