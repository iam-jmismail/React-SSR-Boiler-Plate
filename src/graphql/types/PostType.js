import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from "graphql";

const PostType = new ObjectType({
  name: "PostType",
  description: "Posts Type for the front-end",
  fields: {
    title: { type: NonNull(StringType) },
    content: { type: NonNull(StringType) },
    status: { type: StringType },
  },
});

export default PostType;
