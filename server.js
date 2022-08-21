const express = require('express')
const listRouter = require('./routes/list.routes.js')
const taskRouter = require('./routes/task.routes.js')
const dashboardRouter = require('./routes/dashboard.routes.js')


const PORT = process.env.PORT || 8080

const app = express()
app.use((express.json()))
app.use('/api', listRouter)
app.use('/api', taskRouter)
app.use('/api', dashboardRouter)


app.listen(PORT, () => console.log(`server started on port ${PORT}`))
