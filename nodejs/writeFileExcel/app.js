const express = require('express');
const routes = require('./routes');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

routes(app)

app.get('/',(req, res)=> {
    res.send('hello world')
})

app.post('/',(req,res)=>{
    console.log('请求体',req.body)
    res.status(201).send()
})

app.put('/:id',(req,res)=>{
    console.log('修改',req.params.id)
    console.log('请求体',req.body)
    res.send()
})
app.delete('/:id',(req,res)=>{
    console.log('删除',req.params.id)
    res.status(204).send()
})


const port = 3000
app.listen(port, () => {
    console.log(`Server is running: http://localhost:${port}`)
})