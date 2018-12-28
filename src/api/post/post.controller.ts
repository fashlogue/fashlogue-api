import {Request, Response, NextFunction} from 'express';
import PostModel from './post.model';
import * as httpStatus from 'http-status';

export default class UserController {

  /**
 * Get all the Posts from the database
 * @param {Object} req: url params
 * @param {Function} res: Express.js response callback
 * @param {Function} next: Express.js middleware callback
 * @author Freeman Ogbiyoyo
 * @public
 */
  public static async getAllPost(req : Request, res : Response, next : NextFunction) {

    try {

      // Get data from the db
      let result = await PostModel
        .find()
        .exec();
      const status = res.statusCode;

      // Response
      res.send({message: 'it works! We got all posts', result: result, status: status});
    } catch (err) {

      // Error response
      res.send({message: 'Could not get Users', err: err});
    }
  }

  /**
 * Get all the users from the database
 * @param {Object} req: url params
 * @param {Function} res: Express.js response callback
 * @param {Function} next: Express.js middleware callback
 * @author Freeman Ogbiyoyo
 * @public
 */

//   public static async getUser(req : Request, res : Response, next : NextFunction) {

//     try {

//       //
//       // Get data
//       const username : String = req.params.username;
//       console.log(username);
//       let result = await UserModel
//         .findOne({username})
//         .exec();
//       const status = res.statusCode;

//       //
//       // Response
//       res.send({message: 'Successfull got a user', result: result, status: status});
//     } catch (err) {

//       //
//       // Error response
//       res.send({message: 'Could not get Examples', err: err});
//     }
//   }

//   /**
//  * Return the user Object
//  * @param {Object} user:  user object
//  * @author Freeman Ogbiyoyo
//  * @private @static
//  */

//   private static userDataToPassInToken(user) : Object {
//     return {_id: user._id, email: user.email};
//   }

  /**
 * Create a post in the database
 * @param {Object} req: url params
 * @param {Function} res: Express.js response callback
 * @param {Function} next: Express.js middleware callback
 * @author Freeman Ogbiyoyo
 * @public
 */

  public static createPost(req : Request, res : Response, next : NextFunction) : void {

    // The attributes.
    const {
        author,
        permlink,
        postImage,
        postDescription,
        postTitle,
        Tags,
        postedTo
    } = req.body;

  
      PostModel
        .create({
            author,
            permlink,
            postImage,
            postDescription,
            postTitle,
            Tags,
            postedTo  
        })
        .then(post => {
          res
            .status(201)
            .send({
              data: {
                message: "Successfully Created",
                post,
                status: httpStatus.CREATED
              }
            });
        })
        .catch(err => {
          res
            .status(400)
            .send({
              errors: [
                {
                  title: "Can't create the post",
                  detail: err.message
                }
              ]
            });
        });
    }

//   }

//   /**
//  * Udate a user in the database
//  * @param {Object} req: url params
//  * @param {Function} res: Express.js response callback
//  * @param {Function} next: Express.js middleware callback
//  * @author Freeman Ogbiyoyo
//  * @public
//  */
//   public static async update(req : Request, res : Response, next : NextFunction) {

//     try {

//       //
//       // Get data
//       var options = {
//         // Return the document after updates are applied
//         new: true,
//         // Create a document if one isn't found. Required for `setDefaultsOnInsert`
//         upsert: true,
//         setDefaultsOnInsert: true
//       };

//       const username : String = req.params.username;
//       let result = await UserModel.findOneAndUpdate({
//         username
//       }, {
//         ...req.body,
//         modifiedAt: new Date()
//       }, options).exec()

//       const status = res.statusCode;

//       //
//       // Response
//       return res.send({message: 'Sucessfully updated a user', result: result, status: status});
//     } catch (err) {

//       //
//       // Error response
//       res.send({message: 'Could not update the user', err: err});
//     }
//   }

//   /**
//  * Authenticate a user into an app by issuing a access token
//  * @param {Object} req: url params
//  * @param {Function} res: Express.js response callback
//  * @param {Function} next: Express.js middleware callback
//  * @author Freeman Ogbiyoyo
//  * @public
//  */
//   public static async authenticate(req : Request, res : Response, next : NextFunction) {

//     // The attributes.
//     let username = req.body.username;
//     let password = req.body.password;

//     // The errors object
//     let errors : Array < Object > = [];

//     // Check password
//     if (!password) {
//       errors.push({title: "Attribute is missing", detail: "No password specified"});
//     } else {
//       // check password length
//       if (password.length < 6) {
//         errors.push({title: "Invalid attribute", detail: "Password must contain at least 6 characters"});
//       }
//     }

//     // If a least one error
//     if (errors.length > 0) {
//       res
//         .status(403)
//         .send({errors: errors});
//     } else {
//       // find the user with the username provided
//       UserModel
//         .findOne({username})
//         .then(user => {
//           // if user exist
//           if (user) {
//             //compare password (the one given by the user and the one in the database)
//             user.comparePassword(password, (err, isMatch) => {
//               //if not a match return error
//               if (err) {
//                 errors.push({title: "Can't login user", detail: "Error comparing the password"});
//               }
//               if (!isMatch) {
//                 errors.push({title: "Can't login user", detail: "The password doesn't match"});
//               }

//               if (errors.length > 0) {
//                 res
//                   .status(400)
//                   .send({errors: errors});
//               } else {
//                 res
//                   .status(201)
//                   .send({
//                     data: {
//                       type: "users",
//                       id: user._id,
//                       attributes: {
//                         email: user['email']
//                       },
//                       token: "JWT " + jwt.encode(UserController.userDataToPassInToken(user), process.env.SECRET, "HS256"),
//                       status: httpStatus.CREATED
//                     }
//                   })
//               }

//             });
//             // if user not found in the database
//           } else {
//             res
//               .status(400)
//               .send({
//                 errors: [
//                   {
//                     title: "Invalid attribute",
//                     detail: "The user doesn't exist in our records"
//                   }
//                 ]
//               })
//           }
//         });

//     }
//   }
}
