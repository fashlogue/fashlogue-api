"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TransactionSchema = new mongoose_1.Schema({
    user: {
        type: Object,
        required: true,
        unique: true
    },
    user_id: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    currency: {
        type: String,
        required: true,
    },
    memo: {
        memo: String,
    },
    createdAt: {
        type: Date,
        default: new Date
    },
    updatedAt: {
        type: Date,
        default: new Date
    },
    deletedAt: {
        type: Date,
    },
});
exports.default = mongoose_1.model('Transaction', TransactionSchema);
//# sourceMappingURL=Transaction.model.js.map