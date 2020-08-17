import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
} from "graphql";

const UserType = new ObjectType({
  name: "User",
  fields: {
    email: { type: new NonNull(StringType) },
    password: { type: StringType },
  },
});

export default UserType;
