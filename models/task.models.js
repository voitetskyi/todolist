const db = require('../db')

class TaskModel {
    async createTask(done, name, description,duedate, list_id) {
        const newTask = await db.query('INSERT INTO tasks (done, name, description, duedate, list_id) values ($1, $2, $3, $4, $5) RETURNING *',
        [done, name, description, duedate, list_id])
        return newTask.rows[0]
    }

    async getOneTask(id) {
        const task = await db.query('SELECT * FROM tasks WHERE id = $1', [id])
        return task.rows[0]
    }

    async getTasks() {
        const tasks = await db.query('SELECT * FROM tasks')
        return tasks.rows
    }

    async updateTask(done, name, description, duedate, list_id, id) {
        if (done !== undefined) {
            const task = await db.query('UPDATE tasks SET done = $1 WHERE id = $2 RETURNING *',
                [done, id])
            return task.rows[0]
        } else if (name !== undefined) {
            const task = await db.query('UPDATE tasks SET name = $1 WHERE id = $2 RETURNING *',
                [name, id])
            return task.rows[0]
        } else if (description !== undefined) {
            const task = await db.query('UPDATE tasks SET description = $1 WHERE id = $2 RETURNING *',
                [description, id])
            return task.rows[0]
        } else if (duedate !== undefined) {
            const task = await db.query('UPDATE tasks SET duedate = $1 WHERE id = $2 RETURNING *',
                [duedate, id])
            return task.rows[0]
        } else if (list_id !== undefined) {
            const task = await db.query('UPDATE tasks SET list_id = $1 WHERE id = $2 RETURNING *',
                [list_id, id])
            return task.rows[0]
        } 
    }

    async getTasksList(id) {
        const tasks = await db.query('SELECT * FROM tasks WHERE list_id = $1', [id])
        return tasks.rows
    }

    async deleteTask(id) {
        const task = await db.query('DELETE FROM tasks WHERE id = $1', [id])
        return task.rows[0]
    }
}

module.exports = new TaskModel()

exports