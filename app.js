const express = require (`express`)
const app = express()
const port = 3000

app.get ('/', (req, res) =>{
    res.send('heloo word lallal')
}) 
app.post ('/post', (req, res) =>{
    res.send('heloo word lallal')
}) 
app.delete ('/delete', (req, res) =>{
    res.send('heloo word lallal')
}) 

app.listen(port,() => {
    console.log(`example app listening on port ${port}`)
})

