import {Router, Request, Response, NextFunction} from 'express';
import UserController from './user.controller';

export class UserRouter {

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
     * @api {get} v1/users Get all Users
     * @apiDescription Get all users in the database
     * @apiVersion 1.0.0
     * @apiName getAll
     * @apiGroup Users
     * @apiPermission All
     *
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object[]}   results                      Array with the results
     *
     */
        this
            .router
            .get('/', UserController.getAll);

        /**
     * @api {post} v1/users Create User
     * @apiDescription create a users in the database
     * @apiVersion 1.0.0
     * @apiName create
     * @apiGroup Users
     * @apiPermission All
     *
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object}     data                         data with the user and token
     * @apiSucess  {String}     token                        jwt access token issued to user.
     *
     */
        this
            .router
            .post('/', UserController.create);

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
        this
            .router
            .get('/:username', UserController.getUser);

        /**
     * @api {put} v1/users/:username Update User
     * @apiDescription update a particular user from the db
     * @apiVersion 1.0.0
     * @apiName Update
     * @apiGroup Users
     * @apiPermission All
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object}     result                        updated data with the user
     */
        this
            .router
            .put('/:username', UserController.update);

    /**
     * @api {post} v1/users/authenticate Authenticate user
     * @apiDescription authenticate a particular user from the db
     * @apiVersion 1.0.0
     * @apiName authenticate
     * @apiGroup Users
     * @apiPermission All
     * @apiSuccess {Number}     status                       http status response
     * @apiSuccess {Object}     data                       data with the user
     * @apiSucess  {String}     token                        jwt access token issued to user.
     */
        this
            .router
            .post('/authenticate', UserController.authenticate);

    }

}

//
// Create Router and export its configured Express.Router new
// UserRouter().init();

export default new UserRouter().router;