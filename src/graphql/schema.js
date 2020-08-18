import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from "graphql";

// Queries
import me from "./queries/me";
import getPosts from "./queries/posts/getPosts";

// Mutations
import createPost from "./mutations/posts/createPost";
import editPost from "./mutations/posts/editPost";
import deletePost from "./mutations/posts/deletePost";

const schema = new Schema({
  query: new ObjectType({
    name: "Query",
    fields: {
      me,
      getPosts,
    },
  }),

  mutation: new ObjectType({
    name: "Mutation",
    fields: {
      createPost,
      editPost,
      deletePost,
    },
  }),
});

export default schema;
