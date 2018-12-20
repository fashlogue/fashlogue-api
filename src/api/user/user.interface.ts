export interface IUser {
    name: string;
    email: string;
    oauthId: string;
    profilePic: string;
    bio: '';
    brand: '';
    phone: string;
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