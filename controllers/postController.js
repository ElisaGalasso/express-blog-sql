const posts = require('../routers/posts')
const connection = require('../data/dbPost')

//index
function index(req, res) {
    //res.send('Show all posts')

    const sql = 'SELECT * FROM posts'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json(results)
    })
}

//show
function show(req, res) {
    //res.send('Show the single post')
    const { id } = req.params
    const post = posts.find(item => item.id === parseInt(id))
    res.json(post)
}

//store
function store(req, res) {

    console.log(req.body);
    const newIdPost = posts[posts.length - 1].id + 1
    console.log(newIdPost);

    const { titolo, contenuto, immagine, tags } = req.body

    const newPost = {
        titolo,
        contenuto,
        immagine,
        tags
    }
    console.log(newPost);

    posts.push(newPost)
    console.log(posts);

    res.status(201).json(newPost)



    //res.send('Create a new post')
}

//update
function update(req, res) {
    res.send('Update the entire post')
}

//modify
function modify(req, res) {
    res.send('Partial update the post')
}

//destroy
function destroy(req, res) {
    res.send('Delete the single post')
}

module.exports = {
    index,
    show,
    store,
    update,
    modify,
    destroy
}