const express = require('express');

const route = express.Router()

route.get('/', (req, res) => {
    res.send({ code: 0, data: 'post文章' })
})

route.post('/', (req, res) => {
    console.log('请求体', req.body)
    res.status(201).send()
})

route.put('/:id', (req, res) => {
    console.log('修改', req.params.id)
    console.log('请求体', req.body)
    res.send()
})
route.delete('/:id', (req, res) => {
    console.log('删除', req.params.id)
    res.status(204).send()
})

module.exports = route