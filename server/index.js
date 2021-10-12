const express = require('express')
const cors = require('cors')

const app = express() 
app.use(express.json())
app.use(cors())

const ctrl = require('./controller')
console.log(ctrl)

app.get('/api/houses', ctrl.getAllHouses)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.put('/api/houses/:id', ctrl.updateHouse)
app.post('/api/houses',ctrl.createHouse)
app.listen(4004, () => console.log('You are running on server 4004'))