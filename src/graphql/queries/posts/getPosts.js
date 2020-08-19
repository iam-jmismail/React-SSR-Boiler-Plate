// GrpahQL
import {
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from "graphql";

import PostType from "../../types/PostType";
import Post from "../../models/Post";

const getPosts = {
  type: new List(PostType),
  async resolve() {
    return await Post.find();
  },
};

export default getPosts;


/*
query {
  getPosts {
    title
    content
  }
}
*/