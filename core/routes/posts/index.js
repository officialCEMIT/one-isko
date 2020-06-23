const Posts = require('../../models/Posts');

const posts = require('express').Router()
    .get('/', async(req, res) => {
        try {
            const p = await Posts.find();
            res.json(p)
        } catch (err) {
            res.json({ message: err})
        }
    })
    .post('/', (req, res) => {
        Posts({
            text: 'TEST'
        }).save()
        .then((r) => {
            res.json(r)
        })
    })

module.exports = posts;