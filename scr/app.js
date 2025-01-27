import express from 'express'
import productRouter from './routes/products.router.js'
import exp from 'constants'

const app = express()

// Configuración del servidor
app.use(express.json)
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/products', productRouter)
app.use('/api/carts', cartsRouter)


// SERVER
 const PORT = 8080
 app.listen(PORT, () => {
    console.log("Servidor activo en el puerto: " + PORT)
 })