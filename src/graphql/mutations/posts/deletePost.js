// GrpahQL
import {
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from "graphql";

import PostType from "../../types/PostType";
import Post from "../../models/Post";

const deletePost = {
  type: PostType,
  args: {
    id: { type: new NonNull(StringType) },
  },
  async resolve({ request }, { id, title, content }) {
    var postDeleted = await Post.findByIdAndDelete(id);

    if (postDeleted) {
      return {
        status: "Posts Deleted Successfullly",
      };
    } else {
      return {
        status: "No Such Posts Exists",
      };
    }
  },
};

export default deletePost;

/*
  mutation ($id: String!) {
    deletePost(id: $id) {
      status
    }
  }
    
  */
