import {Express, Router, Request, Response, NextFunction} from 'express';
import UserRouter from '../api/user/user.router';
import PostRouter from '../api/post/post.router';


export default class Route {
    public router : Router;
    private app;

    constructor(app : Express) {
        // Set router
        this.router = Router();

        //
        // Set app
        this.app = app;

        //
        // Set all routes

        this.setAllRoutes();
    }

    private setAllRoutes() {
        this
            .app
            .use('/api/v1/users', UserRouter);
        this
            .app
            .use('/api/v1/posts', PostRouter);
    }

}
