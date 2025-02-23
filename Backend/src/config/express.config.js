const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use('/assets', express.static('./public/'))
app.get('/health', (req, res, next) =>{
    res.json({
        result: "hello there",
        message: "success ok",
        meta: null
    })
})
app.use((req, res, next) => {
    next({code: 404, message: "Not Found"})
})
app.use((error, req, res, next) => {
    let code = error.code || 500;
    let data = error.data || null;
    let msg = error.message || "Internal server error";
    res.status(code).json({
        result: data,
        message: msg,
        meta: null
    })
})
modunle.exports = app
