//document comment for groups controller
const Group = require('../models/group');
const User = require('../models/user');
const { validationResult } = require('express-validator');
const { group } = require('console');


//get all groups
exports.getGroups = (req, res, next) => {
    Group.find()
        .then(groups => {
            res.status(200).json({ message: 'Fetched groups successfully.', groups: groups });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}


//get group by id
exports.getGroup = (req, res, next) => {
    const groupId = req.params.groupId;
    Group.findById(groupId)
        .then(group => {
            if (!group) {
                const error = new Error('Could not find group.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: 'Group fetched.', group: group });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

//get group by group owner
exports.getGroupByOwner = (req, res, next) => {
    const ownerId = req.params.ownerId;
    Group.find({ owner: ownerId })
        .then(group => {
            if (!group) {
                const error = new Error('Could not find group.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: 'Group fetched.', group: group });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}

//get user belonging groups
exports.getGroupByUser = (req, res, next) => {
    const userId = req.params.userId;
    Group.find({ users: userId })
        .then(group => {
            if (!group) {
                const error = new Error('Could not find group.');
                error.statusCode = 404;
                throw error;
            }
            res.status(200).json({ message: 'Group fetched.', group: group });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

}