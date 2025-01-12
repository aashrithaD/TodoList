const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')

app.get('/get',(req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Find the current state of the task
        const task = await TodoModel.findById(id);

        // Toggle the `isComplete` value
        const updatedTask = await TodoModel.findByIdAndUpdate(
            { _id: id },
            { isComplete: !task.isComplete },
            { new: true } // Return the updated document
        );

        res.json(updatedTask);
    } catch (err) {
        res.status(500).json(err);
    }
});


app.delete('/delete/:id', (req, res) => {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    console.log("Request Body:", req.body);
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
}
)


app.listen(3001, () => {
    console.log("Server is running")
})