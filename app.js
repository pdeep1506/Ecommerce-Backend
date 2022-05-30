import express from 'express';
const app = express();
import 'dotenv/config'
import cors from 'cors'
import './db/conn.js'
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import productRoute from './routes/product.js'
import cartRoute from './routes/cart.js'
import orderRoute  from './routes/order.js'

const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/user',userRoute)
app.use('/api/auth',authRoute)
app.use('/api/product',productRoute)
app.use('/api/cart',cartRoute)
app.use('/api/order',orderRoute)

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on the port no ${port}`)
})



