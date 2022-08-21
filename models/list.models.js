const db = require('../db')

class ListModel {
    async updateList (name, id) {
        const data = await db.query('UPDATE lists SET name = $1 WHERE id = $2 RETURNING *', [name, id])
        return data.rows[0]
    }

    async createList (name) {
        const data = await db.query('INSERT INTO lists (name) values ($1) RETURNING *', [name])
        return data.rows[0]
    }

    async getLists() {
        const lists = await db.query('SELECT * FROM lists')
        return lists.rows
    }

    async getOneList(id) {
        const list = await db.query('SELECT * FROM lists WHERE id = $1', [id])
        return list.rows[0]
    }

    async deleteList(id) {
        const list = await db.query('DELETE FROM lists WHERE id = $1', [id])
        return list.rows[0]
    }
}

module.exports = new ListModel()

exports
