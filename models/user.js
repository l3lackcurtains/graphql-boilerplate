import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	name: {
	 	type: String,
		required: true
	}
}, { collection: 'user', timestamps: true } );

export default mongoose.model('user', userSchema);
