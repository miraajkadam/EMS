import { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

var fakeEmployeeDatabase = [
  { name: 'Miraaj Kadam', email: 'miraaj@gmail.com', id: 1 },
  { name: 'Kadam Miraaj', email: 'kadam@gmail.com', id: 2 },
  { name: 'Miraaj', email: 'miraaj@yahoo.co.in', id: 3 },
];

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    employee: {
      type: EmployeeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return fakeEmployeeDatabase.find((item) => item.id === args.id);
      },
    },
  },
});

export const schema = new GraphQLSchema({ query: RootQuery });
