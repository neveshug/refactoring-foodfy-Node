const express = require('express')
const nunjucks = require('nunjucks')
const recipes = require("./data")

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoscape: false,
    noCache: true
})

server.get("/", (req, res) => {
    res.render('index', { items: recipes })
})

server.get("/recipes", (req, res) => {
    res.render('recipes', { items: recipes })
})

server.get("/about", (req, res) => {
    res.render('about')
})

server.get("/recipe-description", (req, res) => {
    const id = req.query.id

    const recipe = recipes.find(function (recipe) {
        if (recipe.id == id) {
            return true
        }

        if (!recipe) {
            return res.send('Recipe not found')
        }
    })

    return res.render("recipe-description", { items: recipe })
})

server.listen(5000, () => {
    console.log('Server is running')
})