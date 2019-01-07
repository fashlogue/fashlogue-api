import * as mongoose from 'mongoose';
export interface IPost extends mongoose.Document {
    author: String;
    permlink: String;
    postTitle: String;
    postDescription: String;
    category: String;
    postImage: String;
    tags: [string];
    postedTo: [String];
    createdAt: Date;
    modifiedAt: Date;
}