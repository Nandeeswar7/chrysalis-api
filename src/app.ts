import express from 'express'
import dishRoutes from './routes/dishRoutes'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json())
app.use('/api',dishRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>{
    console.log(`server listening at http://localhost:${PORT}`)
})