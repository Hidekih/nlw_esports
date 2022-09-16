import express from 'express';
const PORT = 3333;
const app = express();
app.get('/banner/:id', (req, res) => {
    return res.send({ message: req.params.id }).status(200);
});
app.listen(PORT, () => {
    console.log(`Server started on: http://localhost:${PORT}`);
});
