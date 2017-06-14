import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { userType, userInputType } from '../../types/user'
import UserModel from '../../../models/user'

export default {
	type: userType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		return UserModel.findByIdAndUpdate(
			params.id,
			{ $set: { ...params.data } },
			{ new: true }
		)
		.catch(err => new Error('Couldn\'t Update User data, ', err));
	}
}
