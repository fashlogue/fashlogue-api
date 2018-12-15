"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_router_1 = require("../api/user/user.router");
var Route = /** @class */ (function () {
    function Route(app) {
        // Set router
        this.router = express_1.Router();
        //
        // Set app
        this.app = app;
        //
        // Set all routes
        this.setAllRoutes();
    }
    Route.prototype.setAllRoutes = function () {
        this.app.use('/api/users', user_router_1.default);
    };
    return Route;
}());
exports.default = Route;
//# sourceMappingURL=routes.js.map