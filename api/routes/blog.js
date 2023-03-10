const express = require('express')
const mongoose = require('mongoose')

const Blog = require('../models/Blog');

const router = express.Router()


router.get('/', (req, res) => {
    Blog.find()
        .then(result => res.status(200).json({ message: "All blogs", blogs: result }))
        .catch(err => res.status(500).json({ message: "Server error", error: err }))
})



router.post('/', (req, res) => {
    const newBlog = new Blog({
        _id: mongoose.Types.ObjectId(),
        title: req.body.title,
        username: req.body.username,
        body: req.body.body
    })
    newBlog.save()
        .then(result => res.status(201).json({ message: "Blog posted successfully! Refresh to see the changes.", new_blog: result }))
        .catch(err => res.status(500).json({ message: "Server error", error: err }))
})


module.exports = router;