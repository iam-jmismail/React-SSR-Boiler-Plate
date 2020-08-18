// GrpahQL
import {
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from "graphql";

import PostType from "../../types/PostType";
import Post from "../../models/Post";

const editPost = {
  type: PostType,
  args: {
    id: { type: new NonNull(StringType) },
    title: { type: new NonNull(StringType) },
    content: { type: new NonNull(StringType) },
  },
  async resolve({ request }, { id, title, content }) {
    var updatedPost = await Post.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          title,
          content,
        },
      },
      { new: true }
    );

    if (updatedPost) {
      return {
        status: "Posts Updated Successfullly",
      };
    } else {
      return {
        status: "No Such Posts Exists",
      };
    }
  },
};

export default editPost;

/*
mutation ($id: String!, $title: String!, $content: String!) {
  editPost(id: $id, title: $title, content: $content) {
    status
  }
}
  
*/
