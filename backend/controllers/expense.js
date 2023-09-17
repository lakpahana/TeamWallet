//controler for expense
const Expense = require("../models/expense");
const User = require("../models/user");
const { errorHandler } = require("../helpers/dbErrorHandler");

exports.expenseById = (req, res, next, id) => {
    Expense.findById(id).exec((err, expense) => {
        if (err || !expense) {
        return res.status(400).json({
            error: "Expense not found",
        });
        }
        req.expense = expense;
        next();
    });
    }

exports.create = (req, res) => {
    const expense = new Expense(req.body);
    expense.save((err, data) => {
        if (err) {
        return res.status(400).json({
            error: errorHandler(err),
        });
        }
        res.json({ data });
    });
}

exports.read = (req, res) => {
    return res.json(req.expense);
}

exports.update = (req, res) => {
    const expense = req.expense;
    expense.name = req.body.name;
    expense.amount = req.body.amount;
    expense.save((err, data) => {
        if (err) {
        return res.status(400).json({
            error: errorHandler(err),
        });
        }
        res.json(data);
    });
}

exports.remove = (req, res) => {
    const expense = req.expense;
    expense.remove((err, data) => {
        if (err) {
        return res.status(400).json({
            error: errorHandler(err),
        });
        }
        res.json({
        message: "Expense deleted successfully",
        });
    });
}

exports.list = (req, res) => {
    Expense.find().exec((err, data) => {
        if (err) {
        return res.status(400).json({
            error: errorHandler(err),
        });
        }
        res.json(data);
    });
}
