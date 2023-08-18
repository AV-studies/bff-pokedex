import 'express-async-errors'
import express from 'express';
// import useErrors from './models/Error/AppError';

var app = express()
app.use(express.json())
// app.use(webScrapperRouter)
// app.use(useErrors)

app.listen(8080, function () {
    console.log("Server is running")
})
