const biblioteca = require('express')

const app = biblioteca() //biblioteca = express

app.get('/ping', (req,res) => {
    res.send('pong')
})

app.listen(8080) //!! node server.js - pornesc server-ul -> Ctrl + C - opresc server-ul

