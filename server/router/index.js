const express = require('express');
const router = express.Router();
const Todo =require('../models/TodosModel.js');

router.get('/', async (req, res) => {
    var answer=await Todo.find({});
    res.json(answer);
})
router.post('/', async (req, res) => {
    var answer=await Todo.find({});
    res.json(answer);
})


module.exports = router