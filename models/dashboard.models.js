const db = require('../db')

class DashboardModel {
    // async dashboard() {
    //     let today = await db.query('SELECT COUNT(*)::INT AS today FROM tasks WHERE duedate = CURRENT_DATE')
    //     let count = await db.query('SELECT lists.id, lists.name, COUNT(t.id)::INT AS undone FROM (SELECT * FROM tasks) as t RIGHT JOIN lists ON t.list_id=lists.id AND t.done=false GROUP BY lists.id ORDER BY lists.id;')
    //     const result = Object.assign(today.rows[0], {'lists:': count.rows})
    //     return result
    // }

    async collection() {
        let today = new Date().toLocaleDateString('en-US');
        const collection = await db.select('id', 'done', 'name', 'description')
            .from('tasks')
            .where('duedate', '=', today)
        
        return collection.rows
    }

    // async collection() {
    //     const collection = await db.query('SELECT tasks.id, tasks.done, tasks.name, tasks.description, lists.name FROM tasks, lists WHERE tasks.duedate=CURRENT_DATE AND tasks.list_id=lists.id;')
    //     return collection.rows
    // }

    // async tasklist(id, all) {
    //     if (all === 'true') {
    //         const tasklist = await db.query('SELECT * FROM tasks WHERE list_id=$1;', [id])
    //         return tasklist.rows
    //     } else {
    //         const tasklist = await db.query('SELECT * FROM tasks WHERE list_id=$1 AND done=false;', [id])
    //         return tasklist.rows
    //     }
    // }
}

module.exports = new DashboardModel()

exports