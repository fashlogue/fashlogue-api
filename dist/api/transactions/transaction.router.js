"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Transaction_controller_1 = require("./Transaction.controller");
var TransactionRouter = /** @class */ (function () {
    /*--------  Constructor  --------*/
    function TransactionRouter() {
        //
        // Set router
        this.router = express_1.Router();
        this.init();
    }
    /*--------  Methods  --------*/
    /**
     * Init all routes in this router
     */
    TransactionRouter.prototype.init = function () {
        this.router.put('/:_id', Transaction_controller_1.default.updateTransaction);
        this.router.get('/', Transaction_controller_1.default.getAll);
        this.router.get('/counter', Transaction_controller_1.default.countAll);
        this.router.get('/:_id', Transaction_controller_1.default.getTransaction);
        this.router.post('/', Transaction_controller_1.default.createTransaction);
        this.router.delete('/:_id', Transaction_controller_1.default.deleteTransaction);
    };
    return TransactionRouter;
}());
exports.TransactionRouter = TransactionRouter;
//
// Create Router and export its configured Express.Router
// new UserRouter().init();
exports.default = new TransactionRouter().router;
//# sourceMappingURL=transaction.router.js.map