const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
