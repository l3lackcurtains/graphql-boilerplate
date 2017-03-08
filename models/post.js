import mongoose from 'mongoose';
mongoose.Promise = Promise;

const Schema = mongoose.Schema

const postSchema = new Schema({
	uid: {
		type: String,
		required: true
	},
	title: {
	 	type: String,
		required: true
	},
  body: {
	 	type: String,
		required: true
	}
}, { collection: 'post', timestamps: true } );

export default mongoose.model('post', postSchema);
