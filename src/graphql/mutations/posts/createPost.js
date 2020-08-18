// GrpahQL
import {
  GraphQLList as List,
  GraphQLString as StringType,
  GraphQLInt as IntType,
  GraphQLNonNull as NonNull,
} from "graphql";

import PostType from "../../types/PostType";
import Post from "../../models/Post";

const createPost = {
  type: PostType,
  args: {
    title: { type: new NonNull(StringType) },
    content: { type: new NonNull(StringType) },
  },
  async resolve({ request }, { title, content }) {
    const newPost = new Post({
      title,
      content,
    });

    const savePost = await newPost.save();

    if (savePost) {
      return newPost;
    } else {
      return {
        status: "Sorry Cannot Save the Post",
      };
    }
  },
};

export default createPost;

/*

mutation ($title: String!, $content: String!) {
  createPost(title: $title, content: $content) {
    title
    content
  }
}

*/
