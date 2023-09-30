const express = require('express');
const router = express.Router();

// Load Group model
const Group = require('../models/Group');

// @route GET api/group/test
// @description tests group route
// @access Public
router.get('/test', (req, res) => res.send('group route testing!'));

// @route GET api/group
// @description Get all group
// @access Public
router.get('/', (req, res) => {
    Group.find()
        .then(groups => res.json(groups))
        .catch(err => res.status(404).json({ nogroupsfound: 'No Groups found' }));
    }
);

// @route GET api/group/:id
// @description Get single group by id
// @access Public
router.get('/:id', (req, res) => {
    Group.findById(req.params.id)
        .then(group => res.json(group))
        .catch(err => res.status(404).json({ nogroupfound: 'No Group found' }));
});

// @route GET api/group
// @description add/save group
// @access Public
router.post('/', (req, res) => {
    Group.create(req.body)
        .then(group => res.json({ msg: 'Group added successfully' }))
        .catch(err => res.status(400).json({ error: 'Unable to add this group' }));
});

