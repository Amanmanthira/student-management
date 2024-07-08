import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import DbCon from './utils/db.js'
import AuthRoutes from './routes/Auth.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

DbCon()
app.use(express.json())
app.use(cors())

app.use('api/auth', AuthRoutes)

app.listen(PORT , () => {
    console.log('listening on port');
})



