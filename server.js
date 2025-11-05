const express = require('express')
const app = express()
const PORT = 3000;
const routerPosts = require('./routers/posts.js')

app.use(express.static('public'))
app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('Welcome to blog server API')
})

app.use('/api/posts', routerPosts)