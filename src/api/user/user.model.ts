import { Schema, Document, model, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as uniqueValidator from "mongoose-unique-validator";
import { IUser } from './user.interface';
import * as passport from 'passport';

const SALT_WORK_FACTOR = 10;

export let UserSchema: Schema = new Schema({
    name: {
        type: String,
        default: ''
      },
    oauthId: {
      type: Number,
      default: null
    },
    profilePic: {
      type: String,
      default: ''
    },
    bio: {
      type: String,
      default: ''
    },
    brand: {
      type: String,
      default: ''
    },
    phone: {
      type: Number,
      default: null
    },
    email: {
        type: String,
        default: ''
      },
    verified: {
        type: Boolean,
        default: false
      },
    roles: {
        type: Array,
        default: ['user'],
      },
    username: {
        type: String,
        unique: true,
        required: true,
        default:'',
        lowercase: true,
      },
      isBanned: {
        type: Boolean,
        default: false,
      },
      bannedUntil: {
        type: Number,
        default: null,
      },
      banReason: {
        type: String,
        default: null,
      },
      bannedBy: {
        type: String,
        default: null,
      },
    password: {
        type: String,
        default: ''
      },
    createdAt: {
      type: Date,
      default: new Date
    },
    modifiedAt: {
      type: Date,
      default: new Date
    }, 
});

UserSchema.plugin(uniqueValidator);

UserSchema.pre<IUser>('save', function(next) {
  let user = this
  bcrypt.hash(user.password, 10, (error, hash)=>{
    if(error) {
      return next(error);
    } else{
      this.password = hash
      next()
    }
  })
});


interface UserSchemaDoc extends IUser, Document {
  comparePassword(pw, cb);
}


// method to compare password
UserSchema.methods = {
  comparePassword: function(pw, cb) {
    bcrypt.compare(pw, this.password, function(err, isMatch) {
        if (err) {
          return cb(err);
        }
        cb(null, isMatch); 
    });
  }
};

const UserModel: Model<UserSchemaDoc> = model<UserSchemaDoc>('User', UserSchema);
export default UserModel;