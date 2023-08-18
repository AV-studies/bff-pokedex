import 'express-async-errors'
import express from 'express';
import { appRoutes } from './routes';
// import useErrors from './models/Error/AppError';

var app = express()
app.use(express.json())
app.use(appRoutes)
// app.use(useErrors)

app.listen(8383, function () {
    console.log("Server is running")
})
