require('dotenv').config()
const express = require('express')
const app = express()

const{SERVER_PORT, CONNECTION_STRING} = process.env

const massive = require('massive')

const controller = require('./controller/controller')

app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB Set')
    console.log(db.listTables())
})

app.delete('/api/inventory/:id', controller.delete)
app.get('/api/inventory', controller.getAll)
app.post('/api/inventory', controller.create)
app.put('/api/inventory/:id', controller.update)




app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))