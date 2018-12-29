import {Router, Request, Response, NextFunction} from 'express';
import PostController from './post.controller';

export class PostRouter {

    public router : Router

    /*--------  Constructor  --------*/

    constructor() {

        //
        // Set router
        this.router = Router();
        this.init();
    }

    /*--------  Methods  --------*/

    /**
     *
     * Init all routes in this router
     * @public
     */

    init() {

        /**
     * @api {get} v1/posts Get all Users
     * @apiDescription Get all post in the database
     * @apiVersion 1.0.0
     * @apiName getAllPost
     * @apiGroup Post
     * @apiPermission All
     *
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object[]}   results                      Array with the results
     *
     */
        this
            .router
            .get('/', PostController.getAllPost);

        /**
     * @api {post} v1/users Create Post
     * @apiDescription create a users in the database
     * @apiVersion 1.0.0
     * @apiName createPost
     * @apiGroup Post
     * @apiPermission All
     *
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object}     data                         data with the user and token
     * @apiSucess  {String}     token                        jwt access token issued to user.
     *
     */
        this
            .router
            .post('/', PostController.createPost);

        /**
     * @api {get} v1/users/:username Get Users
     * @apiDescription get a particular user from the db
     * @apiVersion 1.0.0
     * @apiName getUser
     * @apiGroup Users
     * @apiPermission All
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object}     result                       data with the user
     */
        // this
        //     .router
        //     .get('/:username', PostController.getUser);

    /**
     * @api {delete} v1/users/:_id Update User
     * @apiDescription delete a particular post from the db
     * @apiVersion 1.0.0
     * @apiName Delete
     * @apiGroup Post
     * @apiPermission All
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object}     result                        successfully deleted
     */
        this
            .router
            .delete('/:_id', PostController.deletePost);

    /**
     * @api {Update} v1/users/:_id Update User
     * @apiDescription update a particular post in the db
     * @apiVersion 1.0.0
     * @apiName updatePost
     * @apiGroup Post
     * @apiPermission All
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object}     result                        successfully Updated
     */
        this
            .router
            .put('/:_id', PostController.updatePost)

    }

}

export default new PostRouter().router;