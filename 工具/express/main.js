import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const data = req.body.result.input_jing_szuhg7yh
    console.log(data)
    console.log(typeof data)
    res.send('Hello, Express!');
});

app.listen(3000, () => {
    console.log('Express app listening on port 3000');
});