const db = require('../db')
class MessageController{

    async createMessage(req, res){
        const {date_send, content, user_id} = req.body
        const newMessage = await db.query(`INSERT INTO message (date_send, content, user_id) VALUES ($1, $2, $3) RETURNING *`, [date_send,content, user_id])
        res.json(newMessage.rows[0])
    }

    async getMessagesByUser (req, res){
        const {id} = req.query
        const getMessages = await db.query(`SELECT date_send, content FROM message WHERE user_id=$1`, [id])
        res.json(getMessages.rows)
    }

}

module.exports = new MessageController()