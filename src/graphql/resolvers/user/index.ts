import { GQL_Resolvers } from 'graphql-resolvers';
import { usersResolver } from './users.query';
import { fullNameResolver } from './full-name.query';

const resolvers: GQL_Resolvers = {
  Query: {
    users: usersResolver,
  },
  User: {
    fullName: fullNameResolver,
  },
};
export default resolvers;
