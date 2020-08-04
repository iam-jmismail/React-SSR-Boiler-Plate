import {
    GraphQLSchema as Schema,
    GraphQLObjectType as ObjectType,
} from 'graphql';

// Queries 
import me from './queries/me';

// Mutations

const schema = new Schema({
    query: new ObjectType({
        name: 'Query',
        fields: {
            me,
        },
    }),
});

export default schema;