import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';
import FakeEmployeeData from '../db/FAKE_EMPLOYEES.json';
import EmployeeType from './TypeDefs/EmployeeType';

const RootQuery: GraphQLObjectType<any, any> = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    getALlEmployees: {
      type: new GraphQLList(EmployeeType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return FakeEmployeeData;
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createEmployee: {
      type: EmployeeType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
      },
      resolve(parent: any, args: any) {
        FakeEmployeeData.push({
          id: FakeEmployeeData.length + 1,
          name: args.name,
          email: args.email,
        });

        return args;
      },
    },
  },
});

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

export default schema;
