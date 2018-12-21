import * as mongoose from 'mongoose';
export interface IUser extends mongoose.Document {
    name: string;
    email: string;
    oauthId: number;
    profilePic: string;
    bio: string;
    brand: string;
    phone: number;
    verified: boolean;
    roles: [string];
    username: string;
    bannedUntil: number;
    banReason: number;
    bannedBy: string;
    password: string;
    createdAt: Date;
    modifiedAt: Date;
}