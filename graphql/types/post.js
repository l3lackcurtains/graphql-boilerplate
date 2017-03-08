import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID
} from 'graphql';

export const postType = new GraphQLObjectType({
	name: 'Post',
	fields: () => ({
		_id: {
			type: new GraphQLNonNull(GraphQLID)
		},
    uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
    body: {
      type: GraphQLString
    }
	})
})


export const postInputType = new GraphQLInputObjectType({
	name: 'PostInput',
	fields: () => ({
    uid: {
			type: GraphQLString
		},
		title: {
			type: GraphQLString
		},
		body: {
			type: GraphQLString
		},
	})
})
