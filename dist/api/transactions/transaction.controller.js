"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Transaction_model_1 = require("./Transaction.model");
var TransactionController = /** @class */ (function () {
    function TransactionController() {
    }
    /**
     * Get all
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    TransactionController.getAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var size, pageNo, query, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        size = parseInt(req.query.size);
                        pageNo = parseInt(req.query.pageNo);
                        query = {
                            skip: size * pageNo,
                            limit: size
                        };
                        //     let result = await Model.find({},{},query, ()=>{
                        //     }).exec()
                        //     if(pageNo < 0 || pageNo === 0) {
                        //         response = {"error" : true,"message" : "invalid page number, should start with 1"};
                        //         return res.json(response)
                        //   }
                        return [4 /*yield*/, Transaction_model_1.default.count({}, function (err, totalCount) {
                                if (err) {
                                    res.send({ "error": true, "message": "Error fetching data" });
                                }
                            }).exec(function (err, totalCount) {
                                Transaction_model_1.default.find({}, {}, query, function (err, data) {
                                    // Mongo command to fetch all data from collection.
                                    if (err) {
                                        res.send({ "error": true, "message": "Error fetching data" });
                                    }
                                    else {
                                        var totalPages = Math.ceil(totalCount / size);
                                        var totalTransactions = totalCount;
                                        res.send({ "error": false, "result": data, "totalTransactions": totalCount, "pages": totalPages });
                                    }
                                });
                            })
                            // res.send({
                            //     result
                            // })
                        ];
                    case 1:
                        //     let result = await Model.find({},{},query, ()=>{
                        //     }).exec()
                        //     if(pageNo < 0 || pageNo === 0) {
                        //         response = {"error" : true,"message" : "invalid page number, should start with 1"};
                        //         return res.json(response)
                        //   }
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        //
                        // Error response
                        res.send({
                            message: 'Could not get Transactions',
                            err: err_1
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TransactionController.countAll = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var size, pageNo, query, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        size = parseInt(req.query.size);
                        pageNo = parseInt(req.query.pageNo);
                        query = {
                            skip: size * pageNo,
                            limit: size
                        };
                        return [4 /*yield*/, Transaction_model_1.default.count({}, function (err, totalCount) {
                                if (err) {
                                    res.send({ "error": true, "message": "Error fetching data" });
                                }
                            }).exec(function (err, totalCount) {
                                Transaction_model_1.default.find({}, {}, query, function (err, data) {
                                    // Mongo command to fetch all data from collection.
                                    if (err) {
                                        res.send({ "error": true, "message": "Error fetching data" });
                                    }
                                    else {
                                        var totalPages = Math.ceil(totalCount / size);
                                        var totalTransactions = totalCount;
                                        res.send({ "error": false, "totalTransactions": totalCount, });
                                    }
                                });
                            })
                            // res.send({
                            //     result
                            // })
                        ];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        //
                        // Error response
                        res.send({
                            message: 'Could not get Transactions',
                            err: err_2
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * getUser
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    TransactionController.getTransaction = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, result, status_1, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        _id = req.params._id;
                        return [4 /*yield*/, Transaction_model_1.default.findOne({ _id: _id }).exec()];
                    case 1:
                        result = _a.sent();
                        status_1 = res.statusCode;
                        //
                        // Response
                        res.send({
                            message: 'Successfull got an Transaction',
                            result: result,
                            status: status_1
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        //
                        // Error response
                        res.send({
                            message: 'Could not get Examples',
                            err: err_3
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Create
     * @param {*} req
     * @param {*} res
     * @param {*} next
     */
    TransactionController.createTransaction = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, user_id, user, amount, type, currency, memo, model;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, id = _a.id, user_id = _a.user_id, user = _a.user, amount = _a.amount, type = _a.type, currency = _a.currency, memo = _a.memo;
                        model = new Transaction_model_1.default({
                            id: id,
                            user_id: user_id,
                            user: user,
                            amount: amount,
                            type: type,
                            currency: currency,
                            memo: memo
                        });
                        //
                        // Save
                        return [4 /*yield*/, model.save()];
                    case 1:
                        //
                        // Save
                        _b.sent();
                        res.send({
                            message: 'Created!',
                            model: model
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionController.deleteTransaction = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, _id_1, result, status_2, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.params;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        _id_1 = req.params._id;
                        return [4 /*yield*/, Transaction_model_1.default.findOneAndRemove({ _id: _id_1 }, __assign({}, req.body, { deletedAt: new Date() })).exec()];
                    case 2:
                        result = _a.sent();
                        status_2 = res.statusCode;
                        //
                        // Response
                        res.send({
                            message: 'Sucessfully deleted Transaction',
                            result: result,
                            status: status_2
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        //
                        // Error response
                        res.send({
                            message: 'Could not delete th Transaction',
                            err: err_4
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TransactionController.updateTransaction = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _id, transaction, result, status_3, err_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _id = req.params;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        transaction = req.params._id;
                        return [4 /*yield*/, Transaction_model_1.default.findOneAndUpdate({ _id: _id }, __assign({}, req.body, { updatedAt: new Date() })).exec()];
                    case 2:
                        result = _a.sent();
                        status_3 = res.statusCode;
                        //
                        // Response
                        res.send({
                            message: 'Sucessfully updated Transaction',
                            result: result,
                            status: status_3
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _a.sent();
                        //
                        // Error response
                        res.send({
                            message: 'Transaction could not be updated',
                            err: err_5
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return TransactionController;
}());
exports.default = TransactionController;
//# sourceMappingURL=Transaction.controller.js.map